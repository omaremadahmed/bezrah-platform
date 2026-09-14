<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CartController extends Controller
{
    /**
     * Get the authenticated user's cart.
     */
    public function index(Request $request): JsonResponse
    {
        $cart = Cart::with('items.product.translations', 'items.product.variants')
            ->firstOrCreate(['user_id' => $request->user()->id]);

        $items = $cart->items->map(function ($item) {
            $product = $item->product;
            $variant = $product->variants->first();

            return [
                'id' => $product->slug ?? $product->id,
                'product_id' => $product->id,
                'name' => $product->name,
                'image' => $product->image,
                'price_fob_piece' => $variant ? '$' . number_format($variant->price_fob_piece, 2) : 'On request',
                'price_fob_carton' => $variant ? '$' . number_format($variant->price_fob_carton, 2) : 'On request',
                'packaging' => $variant ? $variant->packaging : null,
                'quantity' => $item->quantity,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $items,
        ]);
    }

    /**
     * Sync the frontend cart state to the database.
     * Accepts an array of { id (slug or numeric), quantity }.
     */
    public function sync(Request $request): JsonResponse
    {
        $request->validate([
            'items' => 'present|array',
            'items.*.id' => 'required',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        $user = $request->user();

        DB::transaction(function () use ($user, $request) {
            $cart = Cart::firstOrCreate(['user_id' => $user->id]);

            // Clear existing items
            $cart->items()->delete();

            // Insert new items
            foreach ($request->input('items', []) as $item) {
                $product = Product::findByIdentifier($item['id']);

                if ($product) {
                    $cart->items()->create([
                        'product_id' => $product->id,
                        'quantity' => min((int) $item['quantity'], 9999),
                    ]);
                }
            }
        });

        Log::info('Cart synced', ['user_id' => $user->id, 'item_count' => count($request->input('items', []))]);

        return response()->json([
            'success' => true,
            'message' => 'Cart synced successfully',
        ]);
    }
}

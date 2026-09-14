<?php

namespace App\Services;

use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderService
{
    /**
     * Create a new order with items.
     */
    public function createOrder(User $user, array $data): Order
    {
        return DB::transaction(function () use ($user, $data) {
            $totalAmount = 0;
            $itemsData = [];

            foreach ($data['items'] as $item) {
                $variant = \App\Models\ProductVariant::where('product_id', $item['product_id'])
                    ->when(!empty($item['variant_id']), function($q) use ($item) {
                        return $q->where('id', $item['variant_id']);
                    })
                    ->first();
                
                $unitPrice = $variant ? ($variant->price_fob_piece ?? $variant->price_fob_carton ?? 0) : 0;
                $totalPrice = $item['quantity'] * $unitPrice;
                $totalAmount += $totalPrice;

                $itemsData[] = [
                    'product_id' => $item['product_id'],
                    'product_variant_id' => $item['variant_id'] ?? ($variant ? $variant->id : null),
                    'quantity' => $item['quantity'],
                    'unit_price' => $unitPrice,
                    'total_price' => $totalPrice,
                ];
            }

            $order = Order::create([
                'user_id' => $user->id,
                'total_amount' => $totalAmount,
                'payment_method' => $data['payment_method'] ?? 'bank_transfer',
                'shipping_name' => $data['shipping_name'] ?? $user->name,
                'shipping_email' => $data['shipping_email'] ?? $user->email,
                'shipping_phone' => $data['shipping_phone'] ?? $user->phone,
                'shipping_address' => $data['shipping_address'] ?? '',
                'shipping_city' => $data['shipping_city'] ?? '',
                'shipping_country' => $data['shipping_country'] ?? '',
                'notes' => $data['notes'] ?? null,
            ]);

            foreach ($itemsData as $itemData) {
                $order->items()->create($itemData);
            }

            Log::info('Order created', [
                'order_id' => $order->id,
                'user_id' => $user->id,
                'total_amount' => $totalAmount,
                'item_count' => count($itemsData),
            ]);

            return $order->load('items.product.translations');
        });
    }

    public function getUserOrders(User $user)
    {
        return $user->orders()->with('items.product')->latest()->get();
    }

    public function getOrderDetails(User $user, int $orderId): ?Order
    {
        return Order::with('items.product.variants')->where('id', $orderId)->where('user_id', $user->id)->first();
    }
}

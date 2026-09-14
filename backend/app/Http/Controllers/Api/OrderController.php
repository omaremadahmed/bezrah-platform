<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\OrderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function index(Request $request): JsonResponse
    {
        $orders = $this->orderService->getUserOrders($request->user());

        return response()->json([
            'success' => true,
            'data' => $orders
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $items = collect($request->input('items', []))->map(function ($item) {
            $identifier = $item['product_id'] ?? $item['productId'] ?? null;
            $product = \App\Models\Product::findByIdentifier($identifier);
            
            return [
                'product_id' => $product ? $product->id : null,
                'quantity' => $item['quantity'] ?? 1,
                'variant_id' => $item['variant_id'] ?? $item['variantId'] ?? null,
            ];
        })->filter(function ($item) {
            return !is_null($item['product_id']);
        })->all();

        $request->merge([
            'items' => $items,
            'payment_method' => $request->input('payment_method', $request->input('paymentMethod')),
            'shipping_name' => $request->input('shipping_name', data_get($request->input('shippingAddress'), 'name')),
            'shipping_company' => $request->input('shipping_company', data_get($request->input('shippingAddress'), 'company')),
            'shipping_email' => $request->input('shipping_email', data_get($request->input('shippingAddress'), 'email')),
            'shipping_phone' => $request->input('shipping_phone', data_get($request->input('shippingAddress'), 'phone')),
            'shipping_address' => $request->input('shipping_address', data_get($request->input('shippingAddress'), 'address')),
            'shipping_city' => $request->input('shipping_city', data_get($request->input('shippingAddress'), 'city')),
            'shipping_country' => $request->input('shipping_country', data_get($request->input('shippingAddress'), 'country')),
        ]);

        $request->validate([
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        $order = $this->orderService->createOrder($request->user(), $request->all());

        return response()->json([
            'success' => true,
            'message' => 'Order created successfully',
            'data' => $order
        ], 201);
    }

    public function show(Request $request, int $id): JsonResponse
    {
        $order = $this->orderService->getOrderDetails($request->user(), $id);

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $order
        ]);
    }
}

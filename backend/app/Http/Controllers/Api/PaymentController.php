<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function process(Request $request): JsonResponse
    {
        $data = $request->validate([
            'orderId' => 'required',
            'paymentMethod' => 'required|string',
            'paymentToken' => 'nullable|string',
        ]);

        return \Illuminate\Support\Facades\DB::transaction(function () use ($data, $request) {
            $order = Order::where('id', $data['orderId'])
                ->where('user_id', $request->user()->id)
                ->lockForUpdate() // Prevent race conditions
                ->first();

            if (!$order) {
                return response()->json([
                    'success' => false,
                    'message' => 'Order not found'
                ], 404);
            }

            // Ensure we don't process the payment twice for the same order
            if ($order->payment_status === 'paid') {
                return response()->json([
                    'success' => false,
                    'message' => 'Order is already paid.'
                ], 400);
            }

            if ($data['paymentMethod'] === 'credit_card') {
                if (empty($data['paymentToken']) || !str_starts_with($data['paymentToken'], 'tok_')) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Invalid or missing payment token'
                    ], 422);
                }
                
                // Add external Visa/Payment API deduction logic here (stripe, etc.)
                // e.g. Stripe::charge(...)
            }

            $paidNow = in_array($data['paymentMethod'], ['credit_card', 'paypal'], true);

            $order->update([
                'payment_method' => $data['paymentMethod'],
                'payment_status' => $paidNow ? 'paid' : 'pending',
                'status' => $paidNow ? 'confirmed' : 'pending',
            ]);

            return response()->json([
                'success' => true,
                'transactionId' => 'TXN-' . strtoupper(uniqid()),
                'order' => $order->fresh('items')
            ]);
        });
    }
}

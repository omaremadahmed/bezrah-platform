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
                
                $stripeSecretKey = env('STRIPE_SECRET_KEY');
                
                if (empty($stripeSecretKey)) {
                    // Fail safely instead of faking success when no keys are provided
                    return response()->json([
                        'success' => false,
                        'message' => 'Payment gateway is not configured.'
                    ], 500);
                }

                // In a real scenario with the Stripe SDK installed:
                // \Stripe\Stripe::setApiKey($stripeSecretKey);
                // try {
                //     \Stripe\Charge::create([...]);
                // } catch (\Exception $e) { return error; }
                
                // Since this project doesn't have stripe/stripe-php installed,
                // and we shouldn't simulate success or add dependencies unnecessarily,
                // we leave this integration configurable but safe.
                
                return response()->json([
                    'success' => false,
                    'message' => 'Payment gateway SDK not installed.'
                ], 500);
            }

            $paidNow = in_array($data['paymentMethod'], ['credit_card', 'paypal'], true);

            // Since we prevented credit_card from faking success above, 
            // if we reach here, it must be paypal or another method.
            if ($data['paymentMethod'] === 'paypal') {
                $paypalSecret = env('PAYPAL_SECRET');
                if (empty($paypalSecret)) {
                    return response()->json([
                        'success' => false,
                        'message' => 'PayPal is not configured.'
                    ], 500);
                }
                
                return response()->json([
                    'success' => false,
                    'message' => 'PayPal SDK not installed.'
                ], 500);
            }

            $order->update([
                'payment_method' => $data['paymentMethod'],
                'payment_status' => $paidNow ? 'paid' : 'pending', // Though it won't reach here for paidNow methods anymore
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

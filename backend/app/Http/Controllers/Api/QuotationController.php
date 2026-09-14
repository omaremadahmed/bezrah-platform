<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\QuotationRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class QuotationController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'category' => 'required|string|max:255',
            'quantity' => 'required|integer|min:1',
            'details' => 'nullable|string',
        ]);

        if ($request->user('sanctum')) {
            $validated['user_id'] = $request->user('sanctum')->id;
        }

        $quotation = QuotationRequest::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Quotation request submitted successfully.',
            'data' => $quotation
        ], 201);
    }
}

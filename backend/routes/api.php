<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\QuotationController;
use App\Http\Controllers\Api\PaymentController;

// Public Routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register'])->middleware('throttle:register');
    Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:login');
    Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])->middleware('throttle:3,1');
    Route::post('/reset-password', [AuthController::class, 'resetPassword'])->middleware('throttle:3,1');
});

Route::get('/products/featured', [ProductController::class, 'featured']);
Route::get('/products/price-list', [ProductController::class, 'priceList']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{slug}', [ProductController::class, 'show']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{slug}', [CategoryController::class, 'show']);

Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:6,1');
Route::post('/quotations', [QuotationController::class, 'store'])->middleware('throttle:6,1');

// Health Endpoint
Route::get('/debug-headers', function (\Illuminate\Http\Request $request) {
    return response()->json([
        'headers' => $request->headers->all(),
        'server' => $_SERVER
    ]);
});

Route::get('/health', function () {
    return response()->json(['status' => 'ok', 'db' => \Illuminate\Support\Facades\DB::connection()->getPdo() ? 'connected' : 'disconnected']);
});

// Protected Routes (User)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::put('/auth/profile', [AuthController::class, 'updateProfile']);
    Route::put('/auth/password', [AuthController::class, 'changePassword']);
    
    // Cart
    Route::get('/cart', [\App\Http\Controllers\Api\CartController::class, 'index']);
    Route::post('/cart/sync', [\App\Http\Controllers\Api\CartController::class, 'sync']);
    
    // Orders
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/orders', [OrderController::class, 'store']);
    Route::get('/orders/{id}', [OrderController::class, 'show']);

    Route::post('/payments/process', [PaymentController::class, 'process']);
});

// Admin Routes (Authorization Implementation)
Route::middleware(['auth:sanctum', 'role:admin'])->prefix('admin')->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
});


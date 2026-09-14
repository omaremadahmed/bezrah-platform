<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();
        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }

    public function featured()
    {
        // Just return some products as featured for now
        $products = Product::with('category')->inRandomOrder()->limit(4)->get();
        
        $products->transform(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'categoryName' => $product->category ? $product->category->name : '',
                'image' => $product->image_url,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }

    public function show($slug)
    {
        $product = Product::with('category', 'variants')->where('slug', $slug)->firstOrFail();
        return response()->json([
            'success' => true,
            'data' => $product
        ]);
    }
}

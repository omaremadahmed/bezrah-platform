<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ProductService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index(Request $request): JsonResponse
    {
        $products = $this->productService->getProducts(
            $request->only(['category', 'search']),
            $request->input('per_page', 12)
        );

        $mapped = $products->map(function ($product) {
            return [
                'id' => $product->id,
                'slug' => $product->slug,
                'name' => $product->name,
                'description' => $product->description,
                'category_name' => $product->category ? $product->category->name : null,
                'image' => $product->image,
                'is_featured' => $product->is_featured,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $mapped,
            'meta' => [
                'current_page' => $products->currentPage(),
                'last_page' => $products->lastPage(),
                'total' => $products->total(),
            ]
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $product = $this->productService->getProductBySlug($slug);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'id' => $product->id,
                'slug' => $product->slug,
                'name' => $product->name,
                'description' => $product->description,
                'category_name' => $product->category ? $product->category->name : null,
                'image' => $product->image,
                'variants' => $product->variants,
                'images' => $product->images,
            ]
        ]);
    }

    public function featured(): JsonResponse
    {
        $products = $this->productService->getFeaturedProducts();
        
        $mapped = $products->map(function ($product) {
            return [
                'id' => $product->id,
                'slug' => $product->slug,
                'name' => $product->name,
                'description' => $product->description,
                'category_name' => $product->category ? $product->category->name : null,
                'image' => $product->image,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $mapped
        ]);
    }

    public function priceList(): JsonResponse
    {
        $products = $this->productService->getPriceList();
        
        $mapped = $products->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'image' => $product->image,
                'variants' => $product->variants->map(function ($variant) {
                    return [
                        'id' => $variant->id,
                        'items' => $variant->items_per_carton,
                        'cartons' => $variant->cartons_per_20ft,
                        'packaging' => $variant->packaging,
                        'drained' => $variant->drained_weight,
                        'fobCarton' => $variant->price_fob_carton,
                        'fobPiece' => $variant->price_fob_piece,
                    ];
                })
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $mapped
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'category_id' => 'nullable|exists:categories,id',
            'image' => 'nullable|string',
            'status' => 'nullable|string|in:active,inactive',
            'is_featured' => 'nullable|boolean',
            'translations' => 'required|array',
            'translations.en.name' => 'required|string|max:255',
            'translations.ar.name' => 'required|string|max:255',
            'translations.*.description' => 'nullable|string',
            'variants' => 'nullable|array',
            'variants.*.packaging' => 'nullable|string',
            'variants.*.price_fob_carton' => 'nullable|numeric',
            'variants.*.price_fob_piece' => 'nullable|numeric',
        ]);

        $product = $this->productService->createProduct($validatedData);

        return response()->json([
            'success' => true,
            'message' => 'Product created successfully',
            'data' => $product
        ], 201);
    }
}

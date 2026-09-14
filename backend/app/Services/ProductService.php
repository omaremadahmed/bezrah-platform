<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class ProductService
{
    /**
     * Get paginated products with filters.
     */
    public function getProducts(array $filters = [], int $perPage = 12): LengthAwarePaginator
    {
        $query = Product::with(['category', 'translations.language', 'images', 'variants'])
            ->active()
            ->orderBy('sort_order');

        if (!empty($filters['category'])) {
            $query->whereHas('category', function ($q) use ($filters) {
                $q->where('slug', $filters['category']);
            });
        }

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->whereHas('translations', function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        return $query->paginate($perPage);
    }

    /**
     * Get single product by slug.
     */
    public function getProductBySlug(string $slug): ?Product
    {
        return Product::with([
            'category.translations', 
            'translations.language', 
            'variants', 
            'images'
        ])->where('slug', $slug)->active()->first();
    }

    /**
     * Get featured products.
     */
    public function getFeaturedProducts(int $limit = 4): Collection
    {
        return Product::with(['category', 'translations', 'images'])
            ->active()
            ->featured()
            ->orderBy('sort_order')
            ->take($limit)
            ->get();
    }

    /**
     * Get full price list data.
     */
    public function getPriceList(): Collection
    {
        return Product::with(['variants', 'translations'])
            ->active()
            ->whereHas('variants')
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * Create a new product with translations and variants.
     */
    public function createProduct(array $data): Product
    {
        $product = Product::create([
            'category_id' => $data['category_id'] ?? null,
            'slug' => \Illuminate\Support\Str::slug($data['translations']['en']['name'] ?? 'product-'.time()),
            'image' => $data['image'] ?? null,
            'status' => $data['status'] ?? 'active',
            'is_featured' => $data['is_featured'] ?? false,
        ]);

        // Add Translations
        if (!empty($data['translations'])) {
            foreach ($data['translations'] as $locale => $translationData) {
                $language = \App\Models\Language::where('code', $locale)->first();
                if ($language) {
                    $product->translations()->create([
                        'language_id' => $language->id,
                        'name' => $translationData['name'],
                        'description' => $translationData['description'] ?? null,
                    ]);
                }
            }
        }

        // Add Variants (if any)
        if (!empty($data['variants'])) {
            foreach ($data['variants'] as $variantData) {
                $product->variants()->create([
                    'packaging' => $variantData['packaging'] ?? null,
                    'items_per_carton' => $variantData['items_per_carton'] ?? null,
                    'cartons_per_20ft' => $variantData['cartons_per_20ft'] ?? null,
                    'drained_weight' => $variantData['drained_weight'] ?? null,
                    'price_fob_carton' => $variantData['price_fob_carton'] ?? null,
                    'price_fob_piece' => $variantData['price_fob_piece'] ?? null,
                ]);
            }
        }

        return $product->load(['translations', 'variants']);
    }
}

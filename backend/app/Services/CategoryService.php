<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;

class CategoryService
{
    /**
     * Get all active categories with translations.
     */
    public function getCategories(): Collection
    {
        return Category::with(['translations'])
            ->active()
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * Get single category by slug.
     */
    public function getCategoryBySlug(string $slug): ?Category
    {
        return Category::with(['translations'])
            ->where('slug', $slug)
            ->active()
            ->first();
    }
}

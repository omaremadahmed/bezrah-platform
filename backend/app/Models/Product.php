<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'category_id',
        'slug',
        'image',
        'status',
        'is_featured',
        'sort_order',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
    ];

    public static function findByIdentifier($identifier): ?self
    {
        $identifier = trim((string) $identifier);

        if ($identifier === '') {
            return null;
        }

        return static::query()
            ->where('slug', $identifier)
            ->when(ctype_digit($identifier), function ($query) use ($identifier) {
                $query->orWhereKey((int) $identifier);
            })
            ->first();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function translations()
    {
        return $this->hasMany(ProductTranslation::class);
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class)->orderBy('sort_order');
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class)->orderBy('sort_order');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Get the translated name based on app locale.
     */
    public function getNameAttribute()
    {
        $locale = app()->getLocale();
        $translation = $this->translations->first(function ($translation) use ($locale) {
            return $translation->language && $translation->language->code === $locale;
        });
        
        if (!$translation) {
            $translation = $this->translations->first(); // fallback
        }
        
        return $translation ? $translation->name : '';
    }

    /**
     * Get the translated description based on app locale.
     */
    public function getDescriptionAttribute()
    {
        $locale = app()->getLocale();
        $translation = $this->translations->first(function ($translation) use ($locale) {
            return $translation->language && $translation->language->code === $locale;
        });
        
        if (!$translation) {
            $translation = $this->translations->first(); // fallback
        }
        
        return $translation ? $translation->description : '';
    }
}

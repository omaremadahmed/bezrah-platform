<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'slug',
        'icon',
        'image',
        'sort_order',
        'status',
    ];

    public function translations()
    {
        return $this->hasMany(CategoryTranslation::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function getNameAttribute()
    {
        $locale = app()->getLocale();
        $translation = $this->translations->where('language.code', $locale)->first();
        
        if (!$translation) {
            $translation = $this->translations->first(); // fallback
        }
        
        return $translation ? $translation->name : '';
    }

    public function getDescriptionAttribute()
    {
        $locale = app()->getLocale();
        $translation = $this->translations->where('language.code', $locale)->first();
        
        if (!$translation) {
            $translation = $this->translations->first(); // fallback
        }
        
        return $translation ? $translation->description : '';
    }
}

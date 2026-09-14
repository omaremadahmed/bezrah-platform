<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = ['code', 'name', 'is_default', 'is_active'];

    protected $casts = [
        'is_default' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function productTranslations()
    {
        return $this->hasMany(ProductTranslation::class);
    }

    public function categoryTranslations()
    {
        return $this->hasMany(CategoryTranslation::class);
    }
}

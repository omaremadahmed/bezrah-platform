<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    protected $fillable = [
        'product_id',
        'packaging',
        'drained_weight',
        'items_per_carton',
        'cartons_per_20ft',
        'price_fob_carton',
        'price_fob_piece',
        'sort_order',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

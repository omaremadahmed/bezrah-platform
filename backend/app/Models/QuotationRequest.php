<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuotationRequest extends Model
{
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'company',
        'country',
        'email',
        'phone',
        'category',
        'quantity',
        'details',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

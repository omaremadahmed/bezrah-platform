<?php
require __DIR__.'/vendor/autoload.php';
\ = require_once __DIR__.'/bootstrap/app.php';
\ = \->make(Illuminate\Contracts\Console\Kernel::class);
\->bootstrap();

\ = \App\Models\Product::with(['variants', 'translations'])->orderBy('sort_order')->get();

\ = [];

foreach (\ as \) {
    \ = [];
    foreach (\->variants as \) {
        \[] = [
            'items' => \->items_per_carton ?? '-',
            'cartons' => \->cartons_per_20ft ?? '-',
            'packaging' => \->packaging ?? '',
            'drained' => \->drained_weight ?? '',
            'fobCarton' => \->price_fob_carton ? '$'.number_format(\->price_fob_carton, 2) : 'On request',
            'fobPiece' => \->price_fob_piece ? '$'.number_format(\->price_fob_piece, 2) : '-',
        ];
    }
    
    \[] = [
        'id' => \->slug,
        'name' => \->name,
        'category' => \->category ? \->category->slug : '',
        'categoryName' => \->category ? \->category->name : '',
        'image' => \->image,
        'variants' => \
    ];
}

echo json_encode(\, JSON_PRETTY_PRINT);

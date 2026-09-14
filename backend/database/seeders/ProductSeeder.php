<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Language;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $en = Language::where('code', 'en')->first()->id;
        $ar = Language::where('code', 'ar')->first()->id;

        $categories = Category::all()->keyBy('slug');

        $products = [
            [
                'slug' => 'green-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-1.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Green Olives', 'description' => 'Premium hand-picked green olives'],
                'ar' => ['name' => 'زيتون أخضر', 'description' => 'زيتون أخضر فاخر مقطوف يدوياً'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.800 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 29.41, 'price_fob_piece' => 4.90],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.400 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 16.63, 'price_fob_piece' => 1.39],
                ]
            ],
            [
                'slug' => 'black-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-2.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Black Olives', 'description' => 'Rich and flavorful black olives'],
                'ar' => ['name' => 'زيتون أسود', 'description' => 'زيتون أسود غني بالنكهة'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.800 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 29.41, 'price_fob_piece' => 4.90],
                ]
            ],
            [
                'slug' => 'tomato-paste',
                'category_slug' => 'sauces',
                'image' => '/images/products/product-26.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Tomato Paste', 'description' => 'Concentrated tomato paste'],
                'ar' => ['name' => 'معجون طماطم', 'description' => 'معجون طماطم مركز'],
                'variants' => [
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.400 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 15.00, 'price_fob_piece' => 1.25],
                ]
            ],
            [
                'slug' => 'sweet-corn',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-15.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Sweet Corn', 'description' => 'Golden sweet corn kernels'],
                'ar' => ['name' => 'ذرة حلوة', 'description' => 'حبات ذرة حلوة ذهبية'],
                'variants' => [
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.340 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 12.00, 'price_fob_piece' => 1.00],
                ]
            ],
        ];

        foreach ($products as $index => $pData) {
            $catId = isset($categories[$pData['category_slug']]) ? $categories[$pData['category_slug']]->id : null;
            
            $product = Product::firstOrCreate(
                ['slug' => $pData['slug']],
                [
                    'category_id' => $catId,
                    'image' => $pData['image'],
                    'is_featured' => $pData['is_featured'] ?? false,
                    'sort_order' => $index,
                ]
            );

            // Translations
            $product->translations()->updateOrCreate(
                ['language_id' => $en],
                ['name' => $pData['en']['name'], 'description' => $pData['en']['description']]
            );
            $product->translations()->updateOrCreate(
                ['language_id' => $ar],
                ['name' => $pData['ar']['name'], 'description' => $pData['ar']['description']]
            );

            // Variants
            if (isset($pData['variants'])) {
                foreach ($pData['variants'] as $vIndex => $variantData) {
                    $variantData['sort_order'] = $vIndex;
                    $product->variants()->updateOrCreate(
                        ['packaging' => $variantData['packaging'], 'drained_weight' => $variantData['drained_weight']],
                        $variantData
                    );
                }
            }
        }
    }
}

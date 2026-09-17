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
            // ═══════════════════════════════════════════
            // OLIVES
            // ═══════════════════════════════════════════
            [
                'slug' => 'whole-green-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-1.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Whole Green Olives', 'description' => 'Premium hand-picked whole green olives'],
                'ar' => ['name' => 'زيتون أخضر حب', 'description' => 'زيتون أخضر حب فاخر مقطوف يدوياً'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.800 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 29.41, 'price_fob_piece' => 4.90],
                    ['packaging' => 'Tins A12', 'drained_weight' => '2.500 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 21.11, 'price_fob_piece' => 7.04],
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.200 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 10.87, 'price_fob_piece' => 0.91],
                    ['packaging' => 'Cans 280g', 'drained_weight' => '0.110 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5400, 'price_fob_carton' => 6.91, 'price_fob_piece' => 0.57],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.400 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 16.63, 'price_fob_piece' => 1.39],
                    ['packaging' => 'Jars 450g', 'drained_weight' => '0.240 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 14.07, 'price_fob_piece' => 1.18],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.200 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 10.23, 'price_fob_piece' => 0.85],
                    ['packaging' => 'Jars 200g', 'drained_weight' => '0.110 G', 'items_per_carton' => 24, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 12.79, 'price_fob_piece' => 0.54],
                ]
            ],
            [
                'slug' => 'pitted-green-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-1.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Pitted Green Olives', 'description' => 'Premium pitted green olives'],
                'ar' => ['name' => 'زيتون أخضر منزوع النوى', 'description' => 'زيتون أخضر منزوع النوى فاخر'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.450 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 30.06, 'price_fob_piece' => 5.02],
                    ['packaging' => 'Tins A12', 'drained_weight' => '2 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 21.11, 'price_fob_piece' => 7.04],
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 10.87, 'price_fob_piece' => 0.91],
                    ['packaging' => 'Cans 280g', 'drained_weight' => '0.090 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5400, 'price_fob_carton' => 6.91, 'price_fob_piece' => 0.57],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 16.63, 'price_fob_piece' => 1.39],
                    ['packaging' => 'Jars 450g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 14.07, 'price_fob_piece' => 1.18],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 8.80, 'price_fob_piece' => 0.74],
                    ['packaging' => 'Jars 200g', 'drained_weight' => '0.090 G', 'items_per_carton' => 24, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 11.00, 'price_fob_piece' => 0.46],
                ]
            ],
            [
                'slug' => 'sliced-green-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-5.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Sliced Green Olives', 'description' => 'Premium sliced green olives'],
                'ar' => ['name' => 'زيتون أخضر شرائح', 'description' => 'زيتون أخضر شرائح فاخر'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.560 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 30.06, 'price_fob_piece' => 5.02],
                    ['packaging' => 'Tins A12', 'drained_weight' => '2 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 21.11, 'price_fob_piece' => 7.04],
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 10.87, 'price_fob_piece' => 0.91],
                    ['packaging' => 'Cans 280g', 'drained_weight' => '0.090 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5400, 'price_fob_carton' => 6.91, 'price_fob_piece' => 0.57],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 16.63, 'price_fob_piece' => 1.39],
                    ['packaging' => 'Jars 450g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 14.07, 'price_fob_piece' => 1.18],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 8.80, 'price_fob_piece' => 0.67],
                    ['packaging' => 'Jars 200g', 'drained_weight' => '0.090 G', 'items_per_carton' => 24, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 10.00, 'price_fob_piece' => 0.42],
                ]
            ],
            [
                'slug' => 'whole-black-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-2.jpeg',
                'is_featured' => true,
                'en' => ['name' => 'Whole Black Olives', 'description' => 'Rich and flavorful whole black olives'],
                'ar' => ['name' => 'زيتون أسود حب', 'description' => 'زيتون أسود حب غني بالنكهة'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.800 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 29.41, 'price_fob_piece' => 4.90],
                    ['packaging' => 'Tins A12', 'drained_weight' => '2.500 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 21.11, 'price_fob_piece' => 7.04],
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.200 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 10.87, 'price_fob_piece' => 0.91],
                    ['packaging' => 'Cans 280g', 'drained_weight' => '0.110 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5400, 'price_fob_carton' => 6.91, 'price_fob_piece' => 0.57],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.400 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 16.63, 'price_fob_piece' => 1.39],
                    ['packaging' => 'Jars 450g', 'drained_weight' => '0.240 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 14.07, 'price_fob_piece' => 1.18],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.200 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 10.23, 'price_fob_piece' => 0.85],
                    ['packaging' => 'Jars 200g', 'drained_weight' => '0.110 G', 'items_per_carton' => 24, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 11.83, 'price_fob_piece' => 0.49],
                ]
            ],
            [
                'slug' => 'pitted-black-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-2.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Pitted Black Olives', 'description' => 'Premium pitted black olives'],
                'ar' => ['name' => 'زيتون أسود منزوع النوى', 'description' => 'زيتون أسود منزوع النوى فاخر'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.450 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 25.85, 'price_fob_piece' => 4.31],
                    ['packaging' => 'Tins A12', 'drained_weight' => '2 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 18.15, 'price_fob_piece' => 6.05],
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 9.35, 'price_fob_piece' => 0.78],
                    ['packaging' => 'Cans 280g', 'drained_weight' => '0.090 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5400, 'price_fob_carton' => 5.94, 'price_fob_piece' => 0.50],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 14.30, 'price_fob_piece' => 1.19],
                    ['packaging' => 'Jars 450g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 12.10, 'price_fob_piece' => 1.01],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3500, 'price_fob_carton' => 10.23, 'price_fob_piece' => 0.85],
                    ['packaging' => 'Jars 200g', 'drained_weight' => '0.090 G', 'items_per_carton' => 24, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 12.79, 'price_fob_piece' => 0.54],
                ]
            ],
            [
                'slug' => 'sliced-black-olives',
                'category_slug' => 'olives',
                'image' => '/images/products/product-2.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Sliced Black Olives', 'description' => 'Premium sliced black olives'],
                'ar' => ['name' => 'زيتون أسود شرائح', 'description' => 'زيتون أسود شرائح فاخر'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.560 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 25.85, 'price_fob_piece' => 4.31],
                    ['packaging' => 'Tins A12', 'drained_weight' => '2 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 18.15, 'price_fob_piece' => 6.05],
                    ['packaging' => 'Cans 400g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5000, 'price_fob_carton' => 9.35, 'price_fob_piece' => 0.78],
                    ['packaging' => 'Cans 280g', 'drained_weight' => '0.090 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 5400, 'price_fob_carton' => 5.94, 'price_fob_piece' => 0.50],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 14.30, 'price_fob_piece' => 1.19],
                    ['packaging' => 'Jars 450g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 11.00, 'price_fob_piece' => 0.92],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3500, 'price_fob_carton' => 8.80, 'price_fob_piece' => 0.67],
                    ['packaging' => 'Jars 200g', 'drained_weight' => '0.090 G', 'items_per_carton' => 24, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 10.00, 'price_fob_piece' => 0.42],
                ]
            ],

            // ═══════════════════════════════════════════
            // PICKLES
            // ═══════════════════════════════════════════
            [
                'slug' => 'green-jalapeno',
                'category_slug' => 'pickles',
                'image' => '/images/products/product-7.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Green Jalapeño', 'description' => 'Spicy green jalapeño peppers'],
                'ar' => ['name' => 'هالابينو أخضر', 'description' => 'فلفل هالابينو أخضر حار'],
                'variants' => [
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 13.11, 'price_fob_piece' => 1.09],
                    ['packaging' => 'Jars 480g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 10.16, 'price_fob_piece' => 0.85],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 6.71, 'price_fob_piece' => 0.56],
                    ['packaging' => 'PET Plastic', 'drained_weight' => '1.550 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 855, 'price_fob_carton' => 11.52, 'price_fob_piece' => 2.88],
                    ['packaging' => 'PET Plastic', 'drained_weight' => '1.800 KG', 'items_per_carton' => 4, 'cartons_per_20ft' => 1070, 'price_fob_carton' => 10.87, 'price_fob_piece' => 2.73],
                ]
            ],
            [
                'slug' => 'red-jalapeno',
                'category_slug' => 'pickles',
                'image' => '/images/products/product-10.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Red Jalapeño', 'description' => 'Spicy red jalapeño peppers'],
                'ar' => ['name' => 'هالابينو أحمر', 'description' => 'فلفل هالابينو أحمر حار'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.560 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 16.63, 'price_fob_piece' => 2.77],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 15.03, 'price_fob_piece' => 1.25],
                    ['packaging' => 'Jars 480g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 12.79, 'price_fob_piece' => 1.07],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 7.56, 'price_fob_piece' => 0.63],
                    ['packaging' => 'PET Plastic', 'drained_weight' => '1.800 KG', 'items_per_carton' => 4, 'cartons_per_20ft' => 1070, 'price_fob_carton' => 13.66, 'price_fob_piece' => 2.28],
                ]
            ],
            [
                'slug' => 'banana-pepper',
                'category_slug' => 'pickles',
                'image' => '/images/products/product-19.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Banana Pepper', 'description' => 'Mild and tangy banana peppers'],
                'ar' => ['name' => 'فلفل موز', 'description' => 'فلفل موز معتدل الحرارة'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.560 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 13.66, 'price_fob_piece' => 2.28],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 12.21, 'price_fob_piece' => 1.02],
                    ['packaging' => 'Jars 480g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 9.53, 'price_fob_piece' => 0.68],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 6.05, 'price_fob_piece' => 0.51],
                    ['packaging' => 'PET Plastic', 'drained_weight' => '1.800 KG', 'items_per_carton' => 4, 'cartons_per_20ft' => 1070, 'price_fob_carton' => 9.63, 'price_fob_piece' => 2.41],
                ]
            ],
            [
                'slug' => 'pepperoncini-pepper',
                'category_slug' => 'pickles',
                'image' => '/images/products/product-10.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Pepperoncini Pepper', 'description' => 'Tangy pepperoncini peppers'],
                'ar' => ['name' => 'فلفل بيبرونشيني', 'description' => 'فلفل بيبرونشيني لاذع'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.560 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 12.93, 'price_fob_piece' => 2.16],
                    ['packaging' => 'Jars 720g', 'drained_weight' => '0.350 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 2000, 'price_fob_carton' => 11.55, 'price_fob_piece' => 0.97],
                    ['packaging' => 'Jars 400g', 'drained_weight' => '0.220 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3200, 'price_fob_carton' => 9.02, 'price_fob_piece' => 0.87],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.170 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 7.04, 'price_fob_piece' => 0.59],
                    ['packaging' => 'PET Plastic', 'drained_weight' => '1.800 KG', 'items_per_carton' => 4, 'cartons_per_20ft' => 1070, 'price_fob_carton' => 11.19, 'price_fob_piece' => 2.81],
                ]
            ],
            [
                'slug' => 'sweet-cherry-pepper',
                'category_slug' => 'pickles',
                'image' => '/images/products/product-10.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Sweet Cherry Pepper', 'description' => 'Sweet and vibrant cherry peppers'],
                'ar' => ['name' => 'فلفل كرزي حلو', 'description' => 'فلفل كرزي حلو وملون'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.200 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 31.46, 'price_fob_piece' => 5.25],
                    ['packaging' => 'Tins A12', 'drained_weight' => '1.800 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 25.71, 'price_fob_piece' => 8.57],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.150 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 14.07, 'price_fob_piece' => 1.18],
                ]
            ],
            [
                'slug' => 'sweet-kardola-pepper',
                'category_slug' => 'pickles',
                'image' => '/images/products/product-10.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Sweet Kardola Pepper', 'description' => 'Sweet kardola peppers'],
                'ar' => ['name' => 'فلفل كاردولا حلو', 'description' => 'فلفل كاردولا حلو'],
                'variants' => [
                    ['packaging' => 'Tins A10', 'drained_weight' => '1.200 KG', 'items_per_carton' => 6, 'cartons_per_20ft' => 1007, 'price_fob_carton' => 31.46, 'price_fob_piece' => 5.25],
                    ['packaging' => 'Tins A12', 'drained_weight' => '1.800 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 25.71, 'price_fob_piece' => 8.57],
                    ['packaging' => 'Jars 370g', 'drained_weight' => '0.150 G', 'items_per_carton' => 12, 'cartons_per_20ft' => 3600, 'price_fob_carton' => 14.07, 'price_fob_piece' => 1.18],
                ]
            ],
            [
                'slug' => 'sliced-lombardi-pepper',
                'category_slug' => 'pickles',
                'image' => '/images/products/product-10.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Sliced Lombardi Pepper', 'description' => 'Sliced Lombardi peppers'],
                'ar' => ['name' => 'فلفل لومباردي شرائح', 'description' => 'فلفل لومباردي شرائح'],
                'variants' => [
                    ['packaging' => 'Tins A12', 'drained_weight' => '2.300 KG', 'items_per_carton' => 3, 'cartons_per_20ft' => 1500, 'price_fob_carton' => 18.61, 'price_fob_piece' => 6.20],
                ]
            ],

            // ═══════════════════════════════════════════
            // IQF VEGETABLES
            // ═══════════════════════════════════════════
            [
                'slug' => 'molokhia',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-19.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Molokhia', 'description' => 'IQF frozen molokhia leaves'],
                'ar' => ['name' => 'ملوخية', 'description' => 'ملوخية مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => 10.23, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'spinach',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-19.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Spinach', 'description' => 'IQF frozen spinach'],
                'ar' => ['name' => 'سبانخ', 'description' => 'سبانخ مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => null, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'artichokes',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-18.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Artichokes', 'description' => 'IQF frozen artichoke hearts'],
                'ar' => ['name' => 'خرشوف', 'description' => 'قلوب خرشوف مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => 13.87, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'sweet-corn',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-15.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Sweet Corn', 'description' => 'IQF frozen sweet corn kernels'],
                'ar' => ['name' => 'ذرة حلوة', 'description' => 'حبات ذرة حلوة مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => 17.90, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'okra',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-19.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Okra', 'description' => 'IQF frozen okra'],
                'ar' => ['name' => 'بامية', 'description' => 'بامية مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => 12.79, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'peas',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-16.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Peas', 'description' => 'IQF frozen green peas'],
                'ar' => ['name' => 'بازلاء', 'description' => 'بازلاء خضراء مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => null, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'cauliflower',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-19.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Cauliflower', 'description' => 'IQF frozen cauliflower florets'],
                'ar' => ['name' => 'قرنبيط', 'description' => 'قرنبيط مجمد سريع التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 1800, 'price_fob_carton' => 10.87, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'broccoli',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-19.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Broccoli', 'description' => 'IQF frozen broccoli florets'],
                'ar' => ['name' => 'بروكلي', 'description' => 'بروكلي مجمد سريع التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 1800, 'price_fob_carton' => 12.15, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'green-beans',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-19.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Green Beans', 'description' => 'IQF frozen green beans'],
                'ar' => ['name' => 'فاصوليا خضراء', 'description' => 'فاصوليا خضراء مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => 11.51, 'price_fob_piece' => null],
                ]
            ],

            // ═══════════════════════════════════════════
            // IQF FRUITS
            // ═══════════════════════════════════════════
            [
                'slug' => 'mango',
                'category_slug' => 'fruits',
                'image' => '/images/products/product-42.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Mango', 'description' => 'IQF frozen mango chunks'],
                'ar' => ['name' => 'مانجو', 'description' => 'قطع مانجو مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => 19.18, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'strawberry',
                'category_slug' => 'fruits',
                'image' => '/images/products/product-43.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Strawberry', 'description' => 'IQF frozen strawberries'],
                'ar' => ['name' => 'فراولة', 'description' => 'فراولة مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => 12.79, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'bell-peppers',
                'category_slug' => 'vegetables',
                'image' => '/images/products/product-36.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Bell Peppers', 'description' => 'IQF frozen bell peppers'],
                'ar' => ['name' => 'فلفل رومي', 'description' => 'فلفل رومي مجمد سريع التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => null, 'price_fob_piece' => null],
                ]
            ],
            [
                'slug' => 'peach',
                'category_slug' => 'fruits',
                'image' => '/images/products/product-11.jpeg',
                'is_featured' => false,
                'en' => ['name' => 'Peach', 'description' => 'IQF frozen peach slices'],
                'ar' => ['name' => 'خوخ', 'description' => 'شرائح خوخ مجمدة سريعة التجميد'],
                'variants' => [
                    ['packaging' => 'Carton bulk', 'drained_weight' => '10 kg', 'items_per_carton' => null, 'cartons_per_20ft' => 2500, 'price_fob_carton' => null, 'price_fob_piece' => null],
                ]
            ],
        ];

        foreach ($products as $index => $pData) {
            $catId = isset($categories[$pData['category_slug']]) ? $categories[$pData['category_slug']]->id : null;
            
            $product = Product::updateOrCreate(
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

            // Variants — delete and recreate to ensure data cleanliness
            $product->variants()->delete();
            if (isset($pData['variants'])) {
                foreach ($pData['variants'] as $vIndex => $variantData) {
                    $variantData['sort_order'] = $vIndex;
                    $product->variants()->create($variantData);
                }
            }
        }

        // Remove the old 'tomato-paste' demo product if it exists
        $oldDemoSlugs = ['tomato-paste'];
        Product::whereIn('slug', $oldDemoSlugs)->each(function ($p) {
            $p->translations()->delete();
            $p->variants()->delete();
            $p->delete();
        });
    }
}

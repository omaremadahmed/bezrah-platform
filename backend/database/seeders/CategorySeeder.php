<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Language;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $en = Language::where('code', 'en')->first()->id;
        $ar = Language::where('code', 'ar')->first()->id;

        $categories = [
            [
                'slug' => 'olives',
                'icon' => '🫒',
                'image' => '/images/categories/olives.jpg',
                'en' => ['name' => 'Olives', 'description' => 'Premium Mediterranean Olives'],
                'ar' => ['name' => 'زيتون', 'description' => 'زيتون متوسطي فاخر']
            ],
            [
                'slug' => 'pickles',
                'icon' => '🥒',
                'image' => '/images/categories/pickles.jpg',
                'en' => ['name' => 'Pickles', 'description' => 'Crisp and flavorful pickles'],
                'ar' => ['name' => 'مخللات', 'description' => 'مخللات مقرمشة ولذيذة']
            ],
            [
                'slug' => 'fruits',
                'icon' => '🍑',
                'image' => '/images/categories/fruits.jpg',
                'en' => ['name' => 'Fruits', 'description' => 'Canned premium fruits'],
                'ar' => ['name' => 'فواكه', 'description' => 'فواكه معلبة فاخرة']
            ],
            [
                'slug' => 'vegetables',
                'icon' => '🥫',
                'image' => '/images/categories/vegetables.jpg',
                'en' => ['name' => 'Vegetables', 'description' => 'Fresh canned vegetables'],
                'ar' => ['name' => 'خضروات', 'description' => 'خضروات معلبة طازجة']
            ],
            [
                'slug' => 'beans',
                'icon' => '🫘',
                'image' => '/images/categories/beans.jpg',
                'en' => ['name' => 'Beans', 'description' => 'Nutritious beans and legumes'],
                'ar' => ['name' => 'بقوليات', 'description' => 'بقوليات مغذية']
            ],
            [
                'slug' => 'sauces',
                'icon' => '🍅',
                'image' => '/images/categories/sauces.jpg',
                'en' => ['name' => 'Sauces', 'description' => 'Rich tomato sauces and pastes'],
                'ar' => ['name' => 'صلصات', 'description' => 'صلصات ومعجون طماطم غنية']
            ],
            [
                'slug' => 'oils',
                'icon' => '🫒',
                'image' => '/images/categories/oils.jpg',
                'en' => ['name' => 'Oils', 'description' => 'Extra virgin olive oils'],
                'ar' => ['name' => 'زيوت', 'description' => 'زيت زيتون بكر ممتاز']
            ],
        ];

        foreach ($categories as $index => $catData) {
            $category = Category::firstOrCreate(
                ['slug' => $catData['slug']],
                ['icon' => $catData['icon'], 'image' => $catData['image'], 'sort_order' => $index]
            );

            $category->translations()->updateOrCreate(
                ['language_id' => $en],
                ['name' => $catData['en']['name'], 'description' => $catData['en']['description']]
            );

            $category->translations()->updateOrCreate(
                ['language_id' => $ar],
                ['name' => $catData['ar']['name'], 'description' => $catData['ar']['description']]
            );
        }
    }
}

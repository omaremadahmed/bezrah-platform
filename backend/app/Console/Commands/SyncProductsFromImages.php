<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Product;
use Illuminate\Support\Facades\File;

class SyncProductsFromImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'products:sync-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Synchronize product images from the frontend directory with existing database products';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting image synchronization...');
        
        $imagesPath = base_path('../frontend/public/images/products');
        
        if (!File::isDirectory($imagesPath)) {
            $this->error("Directory not found: $imagesPath");
            return;
        }

        $files = File::files($imagesPath);
        $existingProducts = Product::all();
        
        $matchedCount = 0;
        $unmatchedImages = [];

        foreach ($files as $file) {
            $ext = strtolower($file->getExtension());
            if (in_array($ext, ['jpeg', 'jpg', 'png', 'webp', 'svg'])) {
                $filename = $file->getFilename();
                $publicPath = '/images/products/' . $filename;
                
                $matched = false;
                
                // Try to find an existing product that already uses this image
                foreach ($existingProducts as $product) {
                    if ($product->image === $publicPath) {
                        $matched = true;
                        $matchedCount++;
                        $this->info("Matched existing product: {$product->slug} -> {$filename}");
                        break;
                    }
                }
                
                if (!$matched) {
                    $unmatchedImages[] = $filename;
                }
            }
        }
        
        $this->info("Synchronization complete.");
        $this->info("Successfully matched {$matchedCount} images with existing products.");
        
        if (count($unmatchedImages) > 0) {
            $this->warn("Found " . count($unmatchedImages) . " unmatched images that do not correspond to any existing product:");
            foreach ($unmatchedImages as $unmatched) {
                $this->line("- " . $unmatched);
            }
            $this->warn("No fake product data was created for these unmatched images, as per strict instructions.");
        }
    }
}

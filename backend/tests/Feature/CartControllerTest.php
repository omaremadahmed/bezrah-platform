<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\Cart;
use App\Models\Language;
use App\Models\Product;

class CartControllerTest extends TestCase
{
    use RefreshDatabase;

    private function createProduct(string $slug): Product
    {
        $language = Language::firstOrCreate(
            ['code' => 'en'],
            ['name' => 'English', 'is_default' => true, 'is_active' => true]
        );

        $product = Product::create([
            'slug' => $slug,
            'image' => '/images/products/test.jpg',
            'status' => 'active',
        ]);

        $product->translations()->create([
            'language_id' => $language->id,
            'name' => 'Test Product',
            'description' => 'Test description',
        ]);

        $product->variants()->create([
            'packaging' => 'Jar',
            'price_fob_piece' => 10.50,
            'price_fob_carton' => 42.00,
        ]);

        return $product;
    }

    public function test_authenticated_user_can_sync_cart()
    {
        $user = User::factory()->create();
        $token = $user->createToken('auth_token')->plainTextToken;
        $product = $this->createProduct('test-item-1');

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token
        ])->postJson('/api/cart/sync', [
            'items' => [
                [
                    'id' => 'test-item-1',
                    'quantity' => 2,
                    'price' => 15.00
                ]
            ]
        ]);

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'success',
                     'message',
                 ]);

        $this->assertDatabaseHas('carts', [
            'user_id' => $user->id
        ]);

        $this->assertDatabaseHas('cart_items', [
            'product_id' => $product->id,
            'quantity' => 2
        ]);
    }

    public function test_authenticated_user_can_retrieve_cart()
    {
        $user = User::factory()->create();
        $token = $user->createToken('auth_token')->plainTextToken;
        $product = $this->createProduct('test-product-2');
        
        $cart = Cart::create(['user_id' => $user->id]);
        $cart->items()->create([
            'product_id' => $product->id,
            'quantity' => 3,
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token
        ])->getJson('/api/cart');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'success',
                     'data' => [
                         '*' => [
                             'id',
                             'product_id',
                             'name',
                             'image',
                             'price_fob_piece',
                             'price_fob_carton',
                             'packaging',
                             'quantity',
                         ],
                     ],
                 ]);

        $response->assertJsonPath('data.0.id', 'test-product-2')
                 ->assertJsonPath('data.0.product_id', $product->id)
                 ->assertJsonPath('data.0.quantity', 3);
    }

    public function test_unauthenticated_user_cannot_access_cart()
    {
        $response = $this->getJson('/api/cart');
        $response->assertStatus(401);
    }
}

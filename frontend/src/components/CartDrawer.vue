<template>
  <transition name="cart-drawer">
    <div v-if="cartStore.isCartOpen" class="cart-overlay" @click.self="cartStore.toggleCart">
      <aside class="cart-drawer">
        <div class="cart-header">
          <h2>{{ $t('nav.cart') || 'Shopping Cart' }}</h2>
          <button class="close-btn" @click="cartStore.toggleCart">&times;</button>
        </div>

        <div v-if="cartStore.items.length === 0" class="empty-cart">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="empty-icon">
            <path d="M6 6h15l-1.7 8.5H8L6 3H3" />
            <circle cx="9" cy="20" r="1.6" />
            <circle cx="18" cy="20" r="1.6" />
          </svg>
          <p>{{ $t('cart.empty') || 'Your cart is empty' }}</p>
          <button class="btn btn-primary" @click="cartStore.toggleCart">
            {{ $t('cart.continue') || 'Continue Shopping' }}
          </button>
        </div>

        <div v-else class="cart-content">
          <ul class="cart-items">
            <li v-for="item in cartStore.items" :key="item.id" class="cart-item">
              <img :src="item.image" :alt="item.name" @error="$event.target.src = '/images/products/product-1.jpeg'" class="item-img" />
              <div class="item-details">
                <h3>{{ locale === 'ar' && item.name_ar ? item.name_ar : item.name }}</h3>
                <p class="item-pack">{{ item.packaging }}</p>
                <div class="item-price">{{ formatPrice(item.price_fob_piece) }} x {{ item.quantity }}</div>
              </div>
              <div class="item-actions">
                <div class="quantity-control">
                  <button type="button" @click="cartStore.updateQuantity(item.id, item.quantity - 1)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button type="button" @click="cartStore.updateQuantity(item.id, item.quantity + 1)">+</button>
                </div>
                <button type="button" class="remove-btn" @click="cartStore.removeItem(item.id)">
                  <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
              </div>
            </li>
          </ul>

          <div class="cart-footer">
            <div class="cart-total">
              <span>{{ $t('cart.total') || 'Total:' }}</span>
              <strong>${{ cartStore.totalPrice }}</strong>
            </div>
            <div class="cart-actions">
              <button class="btn btn-outline" @click="cartStore.toggleCart">
                {{ $t('cart.continue') || 'Continue Shopping' }}
              </button>
              <button class="btn btn-primary checkout-btn" @click="goToCheckout">
                {{ $t('nav.checkout') || 'Proceed to Checkout' }}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </transition>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const cartStore = useCartStore();
const router = useRouter();
const { locale } = useI18n();

const formatPrice = (price) => {
  if (typeof price === 'string' && price.startsWith('$')) return price;
  if (!isNaN(parseFloat(price))) return `$${parseFloat(price).toFixed(2)}`;
  return price;
};

const goToCheckout = () => {
  cartStore.toggleCart();
  router.push('/checkout');
};
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
}

[dir="rtl"] .cart-overlay {
  justify-content: flex-start;
}

.cart-drawer {
  width: 100%;
  max-width: 400px;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
}

[dir="rtl"] .cart-drawer {
  box-shadow: 5px 0 25px rgba(0, 0, 0, 0.1);
}

.cart-header {
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h2 {
  margin: 0;
  font-size: 1.25rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-muted);
}

.empty-cart {
  padding: 40px 20px;
  text-align: center;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.empty-icon {
  width: 64px;
  height: 64px;
  stroke: var(--text-muted);
  fill: none;
  stroke-width: 1.5;
}

.cart-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.item-img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.item-details {
  flex: 1;
}

.item-details h3 {
  font-size: 1rem;
  margin: 0 0 4px;
}

.item-pack {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0 0 6px;
}

.item-price {
  font-weight: 600;
  color: var(--primary-color);
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  overflow: hidden;
}

.quantity-control button {
  background: #f9f9f9;
  border: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-weight: bold;
}

.quantity-control button:hover {
  background: #eee;
}

.quantity-control span {
  width: 30px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
}

.remove-btn {
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  padding: 4px;
}

.remove-btn svg {
  width: 16px;
  height: 16px;
}

.cart-footer {
  padding: 20px;
  background: #f9f9f9;
  border-top: 1px solid var(--border-color);
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.cart-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.checkout-btn {
  width: 100%;
}

.btn-outline {
  width: 100%;
}

/* Drawer Transitions */
.cart-drawer-enter-active,
.cart-drawer-leave-active {
  transition: opacity 0.3s ease;
}

.cart-drawer-enter-active .cart-drawer,
.cart-drawer-leave-active .cart-drawer {
  transition: transform 0.3s ease;
}

.cart-drawer-enter-from,
.cart-drawer-leave-to {
  opacity: 0;
}

.cart-drawer-enter-from .cart-drawer,
.cart-drawer-leave-to .cart-drawer {
  transform: translateX(100%);
}

[dir="rtl"] .cart-drawer-enter-from .cart-drawer,
[dir="rtl"] .cart-drawer-leave-to .cart-drawer {
  transform: translateX(-100%);
}
</style>

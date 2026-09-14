<template>
  <div class="checkout-page">
    <div class="checkout-container" data-aos="fade-up">
      <h1 class="checkout-title">الدفع</h1>

      <!-- Cart Summary -->
      <div class="checkout-grid">
        <div class="checkout-form-section">
          <!-- Shipping Info -->
          <div class="checkout-card">
            <h3 class="card-title">
              <span class="card-icon">📦</span>
              Shipping Information
            </h3>
            <div class="form-row">
              <div class="form-group">
                <label>Full Name</label>
                <input v-model="shipping.name" type="text" placeholder="Your full name" />
              </div>
              <div class="form-group">
                <label>Company</label>
                <input v-model="shipping.company" type="text" placeholder="Company name" />
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="shipping.email" type="email" placeholder="email@company.com" />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input v-model="shipping.phone" type="tel" placeholder="+1 234 567 890" />
            </div>
            <div class="form-group">
              <label>Address</label>
              <textarea v-model="shipping.address" placeholder="Full shipping address" rows="3"></textarea>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>City</label>
                <input v-model="shipping.city" type="text" placeholder="City" />
              </div>
              <div class="form-group">
                <label>Country</label>
                <input v-model="shipping.country" type="text" placeholder="Country" />
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="checkout-card">
            <h3 class="card-title">
              <span class="card-icon">💳</span>
              Payment Method
            </h3>
            <div class="payment-methods">
              <label class="payment-option" :class="{ active: paymentMethod === 'credit_card' }">
                <input type="radio" v-model="paymentMethod" value="credit_card" />
                <div class="payment-content">
                  <span class="pm-icon">💳</span>
                  <div>
                    <strong>Credit / Debit Card</strong>
                    <small>Visa, Mastercard, Amex</small>
                  </div>
                </div>
              </label>
              <label class="payment-option" :class="{ active: paymentMethod === 'bank_transfer' }">
                <input type="radio" v-model="paymentMethod" value="bank_transfer" />
                <div class="payment-content">
                  <span class="pm-icon">🏦</span>
                  <div>
                    <strong>Bank Transfer</strong>
                    <small>Wire transfer / SWIFT</small>
                  </div>
                </div>
              </label>
              <label class="payment-option" :class="{ active: paymentMethod === 'letter_of_credit' }">
                <input type="radio" v-model="paymentMethod" value="letter_of_credit" />
                <div class="payment-content">
                  <span class="pm-icon">📄</span>
                  <div>
                    <strong>Letter of Credit (L/C)</strong>
                    <small>For large B2B orders</small>
                  </div>
                </div>
              </label>
              <label class="payment-option" :class="{ active: paymentMethod === 'paypal' }">
                <input type="radio" v-model="paymentMethod" value="paypal" />
                <div class="payment-content">
                  <span class="pm-icon">🅿️</span>
                  <div>
                    <strong>PayPal</strong>
                    <small>Secure online payment</small>
                  </div>
                </div>
              </label>
            </div>

            <!-- Card Details (shown when credit card selected) -->
            <div v-if="paymentMethod === 'credit_card'" class="card-details" data-aos="fade-down">
              <div class="form-group">
                <label>Card Number</label>
                <input v-model="card.number" type="text" placeholder="1234 5678 9012 3456" maxlength="19" @input="formatCardNumber" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Expiry Date</label>
                  <input v-model="card.expiry" type="text" placeholder="MM/YY" maxlength="5" />
                </div>
                <div class="form-group">
                  <label>CVV</label>
                  <input v-model="card.cvv" type="password" placeholder="•••" maxlength="4" />
                </div>
              </div>
              <div class="form-group">
                <label>Cardholder Name</label>
                <input v-model="card.name" type="text" placeholder="Name on card" />
              </div>
            </div>

            <!-- PayPal Button Container -->
            <div v-if="paymentMethod === 'paypal'" class="paypal-section" data-aos="fade-down">
              <div class="paypal-info">
                <p>🔒 You will be redirected to PayPal to complete your payment securely.</p>
              </div>
              <div id="paypal-button-container" class="paypal-buttons"></div>
              <div v-if="!paypalLoaded" class="paypal-loading">
                <span class="spinner"></span> Loading PayPal...
              </div>
            </div>

            <!-- Bank Transfer Details -->
            <div v-if="paymentMethod === 'bank_transfer'" class="bank-details" data-aos="fade-down">
              <div class="bank-info-card">
                <h4>🏦 Bank Transfer Details</h4>
                <div class="bank-row"><span>Bank:</span><strong>International Trade Bank</strong></div>
                <div class="bank-row"><span>SWIFT:</span><strong>ITBKIQBA</strong></div>
                <div class="bank-row"><span>Account:</span><strong>BEZRAH FOOD IND.</strong></div>
                <div class="bank-row"><span>IBAN:</span><strong>IQ00 1234 5678 9012 3456</strong></div>
                <p class="bank-note">Please include your order number as reference. Orders are confirmed upon payment receipt.</p>
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div class="checkout-card">
            <h3 class="card-title">
              <span class="card-icon">📝</span>
              Order Notes
            </h3>
            <div class="form-group">
              <textarea v-model="notes" placeholder="Special instructions for your order..." rows="3"></textarea>
            </div>
          </div>
        </div>

        <!-- Order Summary Sidebar -->
        <div class="order-summary">
          <div class="checkout-card sticky-card">
            <h3 class="card-title">Order Summary</h3>
            
            <div v-if="cartStore.items.length === 0" class="empty-cart-msg">
              <p>Your cart is empty</p>
              <router-link to="/products" class="btn btn-primary">Browse Products</router-link>
            </div>

            <div v-else>
              <div class="summary-items">
                <div v-for="item in cartStore.items" :key="item.id" class="summary-item">
                  <div class="si-info">
                    <span class="si-name">{{ item.name }}</span>
                    <span class="si-qty">x{{ item.quantity }}</span>
                  </div>
                  <span class="si-price">${{ (parseFloat(item.price_fob_piece?.replace('$','') || 0) * item.quantity).toFixed(2) }}</span>
                </div>
              </div>

              <div class="summary-divider"></div>
              <div class="summary-row">
                <span>Subtotal</span>
                <span>${{ cartStore.totalPrice }}</span>
              </div>
              <div class="summary-row">
                <span>Shipping</span>
                <span class="shipping-note">FOB (calculated at port)</span>
              </div>
              <div class="summary-divider"></div>
              <div class="summary-row total-row">
                <span>Total (FOB)</span>
                <span>${{ cartStore.totalPrice }}</span>
              </div>

              <button 
                class="btn btn-primary btn-checkout" 
                @click="placeOrder"
                :disabled="isProcessing || cartStore.items.length === 0"
              >
                <span v-if="isProcessing" class="spinner"></span>
                <span v-else>{{ paymentMethod === 'credit_card' ? 'Pay Now' : 'Place Order' }}</span>
              </button>

              <div v-if="orderSuccess" class="success-message" data-aos="zoom-in">
                <span class="success-icon">✓</span>
                <strong>Order Confirmed!</strong>
                <p>Transaction ID: {{ transactionId }}</p>
              </div>

              <div v-if="orderError" class="error-message">
                {{ orderError }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, nextTick } from 'vue'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const authStore = useAuthStore()
const router = useRouter()

const paymentMethod = ref('credit_card')
const isProcessing = ref(false)
const orderSuccess = ref(false)
const orderError = ref('')
const transactionId = ref('')
const notes = ref('')
const paypalLoaded = ref(false)
const paypalContainerRef = ref(null)

const shipping = reactive({
  name: authStore.user?.name || '',
  company: '', email: authStore.user?.email || '',
  phone: '', address: '', city: '', country: ''
})

const card = reactive({ number: '', expiry: '', cvv: '', name: '' })

const formatCardNumber = () => {
  card.number = card.number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
}

// Load PayPal SDK
const loadPayPalScript = () => {
  if (document.getElementById('paypal-sdk')) {
    paypalLoaded.value = true;
    return;
  }
  const script = document.createElement('script');
  script.id = 'paypal-sdk';
  // Using sandbox client ID for development
  script.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD&intent=capture';
  script.addEventListener('load', () => {
    paypalLoaded.value = true;
  });
  document.head.appendChild(script);
};

const renderPayPalButton = async () => {
  await nextTick();
  const container = document.getElementById('paypal-button-container');
  if (!container || !window.paypal) return;
  container.innerHTML = '';
  
  window.paypal.Buttons({
    style: {
      layout: 'vertical',
      color: 'gold',
      shape: 'rect',
      label: 'paypal',
      height: 50
    },
    createOrder: (data, actions) => {
      const total = parseFloat(cartStore.totalPrice);
      if (total <= 0) {
        orderError.value = 'Cart is empty';
        return;
      }
      return actions.order.create({
        purchase_units: [{
          description: `Bezrah Order - ${cartStore.itemCount} items`,
          amount: {
            currency_code: 'USD',
            value: total.toFixed(2)
          }
        }]
      });
    },
    onApprove: async (data, actions) => {
      isProcessing.value = true;
      try {
        const details = await actions.order.capture();
        transactionId.value = details.id;
        
        // Send order to our backend
        await cartStore.checkout(
          'paypal',
          shipping,
          notes.value
        );
        
        orderSuccess.value = true;
        cartStore.clearCart();
      } catch (err) {
        orderError.value = 'Payment captured but order saving failed. Contact support with PayPal Transaction ID: ' + data.orderID;
      } finally {
        isProcessing.value = false;
      }
    },
    onError: (err) => {
      console.error('PayPal error:', err);
      orderError.value = 'PayPal payment failed. Please try again.';
    },
    onCancel: () => {
      orderError.value = 'Payment was cancelled.';
    }
  }).render('#paypal-button-container');
};

// Watch for paypal method selected
watch(paymentMethod, async (val) => {
  if (val === 'paypal' && paypalLoaded.value) {
    await renderPayPalButton();
  }
});

watch(paypalLoaded, async (loaded) => {
  if (loaded && paymentMethod.value === 'paypal') {
    await renderPayPalButton();
  }
});

onMounted(() => {
  loadPayPalScript();
});

const placeOrder = async () => {
  orderError.value = ''
  if (!shipping.name || !shipping.email || !shipping.phone || !shipping.address || !shipping.city || !shipping.country) {
    orderError.value = 'Please fill in all shipping details.'
    return
  }
  if (paymentMethod.value === 'credit_card') {
    const digits = card.number.replace(/\s/g, '')
    if (digits.length < 13 || !card.expiry || card.cvv.length < 3 || !card.name) {
      orderError.value = 'Please enter valid card details.'
      return
    }
  }
  if (paymentMethod.value === 'paypal') {
    return
  }
  isProcessing.value = true
  try {
    const orderRes = await cartStore.checkout(paymentMethod.value, shipping, notes.value)
    const orderId = orderRes.order?.id || orderRes.data?.id
    if (paymentMethod.value === 'credit_card') {
      // Mock payment token generation instead of sending raw card details
      const paymentToken = 'tok_mock_' + Math.random().toString(36).substr(2, 9)
      const payRes = await cartStore.processPayment(orderId, paymentMethod.value, paymentToken)
      transactionId.value = payRes.transactionId || payRes.data?.transactionId || orderId
    } else {
      transactionId.value = orderId || 'PENDING'
      cartStore.clearCart()
    }
    orderSuccess.value = true
  } catch (err) {
    orderError.value = err.response?.data?.message || err.message || 'Payment processing failed. Please try again.'
  } finally {
    isProcessing.value = false
  }
}
</script>

<style scoped>
.checkout-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 120px 20px 60px;
}
.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
}
.checkout-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 40px;
  text-align: center;
}
.checkout-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
  align-items: start;
}
.checkout-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  margin-bottom: 24px;
}
.sticky-card {
  position: sticky;
  top: 100px;
}
.card-title {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-icon {
  font-size: 1.4rem;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 0.9rem;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #fafafa;
  transition: all 0.3s ease;
  box-sizing: border-box;
}
.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background: white;
  box-shadow: 0 0 0 4px rgba(15, 76, 58, 0.1);
}
.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.payment-option {
  display: block;
  cursor: pointer;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  transition: all 0.3s ease;
}
.payment-option.active {
  border-color: var(--primary-color);
  background: rgba(15, 76, 58, 0.03);
}
.payment-option input[type="radio"] {
  display: none;
}
.payment-content {
  display: flex;
  align-items: center;
  gap: 14px;
}
.pm-icon {
  font-size: 1.6rem;
}
.payment-content strong {
  display: block;
  font-size: 1rem;
}
.payment-content small {
  color: #888;
  font-size: 0.85rem;
}
.card-details {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.summary-items {
  max-height: 300px;
  overflow-y: auto;
}
.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}
.si-info {
  display: flex;
  gap: 10px;
  align-items: center;
}
.si-name {
  font-weight: 500;
}
.si-qty {
  color: #888;
  font-size: 0.9rem;
}
.si-price {
  font-weight: 700;
  color: var(--primary-color);
}
.summary-divider {
  height: 1px;
  background: #e8e8e8;
  margin: 16px 0;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 0.95rem;
}
.total-row {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--primary-color);
}
.shipping-note {
  color: #888;
  font-size: 0.85rem;
}
.btn-checkout {
  width: 100%;
  padding: 18px;
  font-size: 1.15rem;
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.success-message {
  margin-top: 20px;
  padding: 20px;
  background: #e6f9e6;
  border-radius: 12px;
  text-align: center;
  color: #1a7a1a;
}
.success-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 8px;
}
.error-message {
  margin-top: 16px;
  padding: 14px;
  background: #ffe6e6;
  color: #dc3545;
  border-radius: 8px;
  text-align: center;
}
.empty-cart-msg {
  text-align: center;
  padding: 30px 0;
  color: #888;
}
.empty-cart-msg .btn {
  margin-top: 16px;
}

/* PayPal */
.paypal-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.paypal-info {
  background: #fff9e6;
  border: 1px solid #ffe58f;
  border-radius: 10px;
  padding: 14px 18px;
  margin-bottom: 20px;
  font-size: 0.95rem;
  color: #8a6d3b;
}
.paypal-info p {
  margin: 0;
}
.paypal-buttons {
  min-height: 60px;
}
.paypal-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  color: #888;
}

/* Bank Transfer */
.bank-details {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.bank-info-card {
  background: #f0faf5;
  border: 1px solid #c8e6d5;
  border-radius: 12px;
  padding: 24px;
}
.bank-info-card h4 {
  margin: 0 0 16px;
  color: #0f4c3a;
}
.bank-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e0eee6;
  font-size: 0.95rem;
}
.bank-row:last-of-type {
  border-bottom: none;
}
.bank-row span {
  color: #666;
}
.bank-row strong {
  color: #1a1a1a;
}
.bank-note {
  margin: 16px 0 0;
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

@media (max-width: 992px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }
  .sticky-card {
    position: static;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .checkout-title {
    font-size: 2rem;
  }
  .checkout-page {
    padding-top: 100px;
  }
}
</style>

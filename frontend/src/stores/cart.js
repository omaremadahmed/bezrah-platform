import { defineStore } from 'pinia'
import apiClient from '../services/apiClient'

const parsePrice = (value) => {
  if (typeof value === 'number') return value
  return parseFloat(String(value || '0').replace(/[^0-9.]/g, '')) || 0
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]'),
    isCartOpen: false,
    isSyncing: false
  }),
  getters: {
    itemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => sum + (parsePrice(item.price_fob_piece) * item.quantity), 0).toFixed(2)
    },
    cartItems: (state) => state.items
  },
  actions: {
    addItem(product) {
      const existing = this.items.find(i => i.id === product.id)
      const listedPiece = String(product.price_fob_piece || '').trim()
      const listedCarton = String(product.price_fob_carton || '').trim()
      const unitPrice = (listedPiece && listedPiece !== '-')
        ? listedPiece
        : (listedCarton && listedCarton !== '-' ? listedCarton : 'On request')
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          name_ar: product.name_ar,
          image: product.image,
          price_fob_piece: unitPrice,
          price_fob_carton: product.price_fob_carton,
          packaging: product.packaging,
          quantity: 1
        })
      }
      this.saveCart()
      this.syncToBackend()
    },
    removeItem(productId) {
      this.items = this.items.filter(i => i.id !== productId)
      this.saveCart()
      this.syncToBackend()
    },
    updateQuantity(productId, quantity) {
      const item = this.items.find(i => i.id === productId)
      if (!item) return
      if (quantity < 1) {
        this.removeItem(productId)
        return
      }
      item.quantity = quantity
      this.saveCart()
      this.syncToBackend()
    },
    clearCart() {
      this.items = []
      this.saveCart()
      this.syncToBackend()
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    /**
     * Sync local cart to the backend (for logged-in users).
     * Silently fails if not authenticated – the cart stays in localStorage.
     */
    async syncToBackend() {
      if (!localStorage.getItem('token') || this.isSyncing) return
      this.isSyncing = true
      try {
        await apiClient.post('/cart/sync', {
          items: this.items.map(item => ({
            id: item.id,
            quantity: item.quantity
          }))
        })
      } catch (error) {
        // Sync is best-effort; don't block the UI
        console.warn('Cart sync failed:', error.message)
      } finally {
        this.isSyncing = false
      }
    },

    /**
     * Load the cart from the backend on login. Merges with any
     * items already in localStorage.
     */
    async loadFromBackend() {
      if (!localStorage.getItem('token')) return
      try {
        const res = await apiClient.get('/cart')
        if (res.data?.success && Array.isArray(res.data.data)) {
          const serverItems = res.data.data
          // Merge: keep local items that don't exist on server
          const serverIds = new Set(serverItems.map(i => i.id))
          const localOnly = this.items.filter(i => !serverIds.has(i.id))
          this.items = [...serverItems, ...localOnly]
          this.saveCart()
          // After merge, push the combined result back
          if (localOnly.length > 0) {
            await this.syncToBackend()
          }
        }
      } catch (error) {
        console.warn('Failed to load cart from server:', error.message)
      }
    },

    buildOrderPayload(paymentMethod, shippingAddress, notes) {
      return {
        items: this.items.map(item => ({
          productId: item.id,
          product_id: item.id,
          quantity: item.quantity
        })),
        paymentMethod,
        payment_method: paymentMethod,
        shippingAddress,
        shipping_name: shippingAddress?.name || '',
        shipping_company: shippingAddress?.company || '',
        shipping_email: shippingAddress?.email || '',
        shipping_phone: shippingAddress?.phone || '',
        shipping_address: shippingAddress?.address || '',
        shipping_city: shippingAddress?.city || '',
        shipping_country: shippingAddress?.country || '',
        notes
      }
    },
    async checkout(paymentMethod, shippingAddress, notes) {
      const payload = this.buildOrderPayload(paymentMethod, shippingAddress, notes)
      if (!localStorage.getItem('token')) {
        throw new Error('You must be logged in to checkout.')
      }
      try {
        const res = await apiClient.post('/orders', payload)
        return res.data
      } catch (error) {
        throw error.response?.data || error
      }
    },
    async processPayment(orderId, paymentMethod, paymentToken) {
      if (!localStorage.getItem('token')) {
        throw new Error('You must be logged in to process payment.')
      }
      try {
        const res = await apiClient.post('/payments/process', {
          orderId,
          paymentMethod,
          paymentToken
        })
        this.clearCart()
        return res.data
      } catch (error) {
        throw error.response?.data || error
      }
    }
  }
})

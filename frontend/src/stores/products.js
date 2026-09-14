import { defineStore } from 'pinia';
import { productService } from '../services/productService';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    featuredProducts: [],
    priceList: [],
    currentProduct: null,
    isLoading: false,
    error: null,
    meta: null
  }),

  actions: {
    async fetchProducts(params = {}) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await productService.getProducts(params);
        if (response.success) {
          this.products = response.data;
          this.meta = response.meta;
        }
      } catch (error) {
        this.error = 'Failed to fetch products';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchFeaturedProducts() {
      try {
        const response = await productService.getFeaturedProducts();
        if (response.success) {
          this.featuredProducts = response.data;
        }
      } catch (error) {
        console.error('Failed to fetch featured products', error);
      }
    },

    async fetchPriceList() {
      try {
        const response = await productService.getPriceList();
        if (response.success) {
          this.priceList = response.data;
        }
      } catch (error) {
        console.error('Failed to fetch price list', error);
      }
    }
  }
});

import apiClient from './apiClient';

export const productService = {
  async getProducts(params = {}) {
    const response = await apiClient.get('/products', { params });
    return response.data;
  },

  async getFeaturedProducts() {
    const response = await apiClient.get('/products/featured');
    return response.data;
  },

  async getProduct(slug) {
    const response = await apiClient.get(`/products/${slug}`);
    return response.data;
  },

  async getPriceList() {
    const response = await apiClient.get('/products/price-list');
    return response.data;
  }
};

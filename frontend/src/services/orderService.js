import apiClient from './apiClient';

export const orderService = {
  async createOrder(orderData) {
    const response = await apiClient.post('/orders', orderData);
    return response.data;
  },

  async getOrders() {
    const response = await apiClient.get('/orders');
    return response.data;
  },

  async getOrder(id) {
    const response = await apiClient.get(`/orders/${id}`);
    return response.data;
  }
};

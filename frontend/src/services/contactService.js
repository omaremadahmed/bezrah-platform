import apiClient from './apiClient';

export const contactService = {
  async submitContact(data) {
    const response = await apiClient.post('/contact', data);
    return response.data;
  },

  async submitQuotation(data) {
    const response = await apiClient.post('/quotations', data);
    return response.data;
  }
};

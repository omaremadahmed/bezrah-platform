import apiClient from './apiClient';

export const categoryService = {
  async getCategories() {
    const response = await apiClient.get('/categories');
    return response.data;
  },

  async getCategory(slug) {
    const response = await apiClient.get(`/categories/${slug}`);
    return response.data;
  }
};

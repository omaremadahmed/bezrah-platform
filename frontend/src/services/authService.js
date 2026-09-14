import apiClient, { API_ORIGIN } from './apiClient';
import axios from 'axios';

export const authService = {
  async getCsrfCookie() {
    // Sanctum CSRF cookie initialization
    await axios.get(`${API_ORIGIN}/sanctum/csrf-cookie`, {
      withCredentials: true
    });
  },

  async login(credentials) {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  async register(userData) {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  },

  async logout() {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  },

  async getProfile() {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  async updateProfile(profileData) {
    const response = await apiClient.put('/auth/profile', profileData);
    return response.data;
  },

  async changePassword(passwordData) {
    const response = await apiClient.put('/auth/password', passwordData);
    return response.data;
  },

  async forgotPassword(email) {
    const response = await apiClient.post('/auth/forgot-password', { email });
    return response.data;
  },

  async resetPassword(resetData) {
    const response = await apiClient.post('/auth/reset-password', resetData);
    return response.data;
  }
};

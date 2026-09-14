import { defineStore } from 'pinia';
import { authService } from '../services/authService';
import apiClient from '../services/apiClient';
import { useCartStore } from './cart';

const runInBackground = (task, label) => {
  Promise.resolve()
    .then(task)
    .catch(error => console.warn(`${label} failed:`, error.message || error));
};

const getAuthErrorMessage = (error, fallback) => {
  const data = error.response?.data;
  const firstFieldError = data?.errors
    ? Object.values(data.errors).flat().find(Boolean)
    : null;

  return firstFieldError || data?.message || error.message || fallback;
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    error: null,
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.user && !!state.token,
    isAdmin: (state) => {
      if (!state.user || !state.user.roles) return false;
      return state.user.roles.some(role => role.name === 'admin');
    }
  },
  
  actions: {
    setAuthData(authData) {
      this.user = authData.user;
      this.token = authData.token;
      localStorage.setItem('user', JSON.stringify(authData.user));
      localStorage.setItem('token', authData.token);
      
      // Set token as default header for future requests
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${authData.token}`;
      apiClient.defaults.headers.common['X-Authorization'] = `Bearer ${authData.token}`;
    },

    clearAuthData() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      delete apiClient.defaults.headers.common['Authorization'];
      delete apiClient.defaults.headers.common['X-Authorization'];
    },

    async login(credentials) {
      this.error = null;
      try {
        const response = await authService.login(credentials);
        if (response.success) {
          this.setAuthData(response.data);
          runInBackground(
            () => useCartStore().loadFromBackend(),
            'Cart load after login'
          );
          return true;
        }
        this.error = response.message || 'Invalid email or password';
        return false;
      } catch (error) {
        console.error('Login failed:', error);
        this.error = getAuthErrorMessage(error, 'Invalid email or password');
        return false;
      }
    },

    async register(userData) {
      this.error = null;
      try {
        const response = await authService.register(userData);
        if (response.success) {
          this.setAuthData(response.data);
          runInBackground(
            () => useCartStore().syncToBackend(),
            'Cart sync after registration'
          );
          return true;
        }
        this.error = response.message || 'Registration failed';
        return false;
      } catch (error) {
        console.error('Registration failed:', error);
        this.error = getAuthErrorMessage(error, 'Registration failed');
        return false;
      }
    },

    async logout() {
      try {
        if (this.isAuthenticated) {
          await authService.logout();
        }
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        this.clearAuthData();
      }
    },

    async initialize() {
      if (this.token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        // Ensure X-Authorization is also set for Vercel
        apiClient.defaults.headers.common['X-Authorization'] = `Bearer ${this.token}`;
        try {
          await this.fetchProfile();
        } catch (error) {
          console.warn('Auth initialization failed:', error);
        }
      }
    },

    async fetchProfile() {
      try {
        if (!this.token) return;
        
        // Ensure tokens are attached
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        apiClient.defaults.headers.common['X-Authorization'] = `Bearer ${this.token}`;
        
        const response = await authService.getProfile();
        if (response.success) {
          this.user = response.data;
          localStorage.setItem('user', JSON.stringify(this.user));
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.clearAuthData();
        }
      }
    },

    async updateProfile(profileData) {
      try {
        const response = await authService.updateProfile(profileData);
        if (response.success) {
          this.user = response.data;
          localStorage.setItem('user', JSON.stringify(this.user));
          return true;
        }
        return false;
      } catch (error) {
        console.error('Profile update error:', error);
        throw error;
      }
    },

    async changePassword(passwordData) {
      try {
        const response = await authService.changePassword(passwordData);
        return response.success;
      } catch (error) {
        console.error('Password change error:', error);
        throw error;
      }
    }
  }
});

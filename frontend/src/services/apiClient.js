import axios from 'axios';

const stripTrailingSlash = (value) => value.replace(/\/$/, '');

const configuredApiUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;

export const API_BASE_URL = stripTrailingSlash(
  configuredApiUrl || 'http://localhost:8000/api'
);

const appOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173';

export const API_ORIGIN = new URL(API_BASE_URL, appOrigin).origin;

const getStoredToken = () => localStorage.getItem('token');

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

// Request interceptor to attach language preference
apiClient.interceptors.request.use(config => {
  const locale = localStorage.getItem('locale') || 'en';
  const token = getStoredToken();
  config.headers['Accept-Language'] = locale;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['X-Authorization'] = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
    delete config.headers['X-Authorization'];
  }
  return config;
});

// Response interceptor to handle unauthenticated
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Force logout on client if token invalid
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

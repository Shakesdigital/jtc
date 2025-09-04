import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/.netlify/functions' 
    : 'http://localhost:8888/.netlify/functions',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const apiService = {
  // Ministries
  getMinistries: () => api.get('/ministries'),
  getMinistry: (slug) => api.get(`/ministries/${slug}`),
  createMinistry: (data) => api.post('/ministries', data),
  updateMinistry: (id, data) => api.put(`/ministries/${id}`, data),
  deleteMinistry: (id) => api.delete(`/ministries/${id}`),

  // Sermons
  getSermons: (params) => api.get('/sermons', { params }),
  getSermon: (id) => api.get(`/sermons/${id}`),
  getFeaturedSermons: () => api.get('/sermons?featured=true'),
  createSermon: (data) => api.post('/sermons', data),
  updateSermon: (id, data) => api.put(`/sermons/${id}`, data),
  deleteSermon: (id) => api.delete(`/sermons/${id}`),

  // Events
  getEvents: (params) => api.get('/events', { params }),
  getEvent: (id) => api.get(`/events/${id}`),
  getUpcomingEvents: () => api.get('/events?upcoming=true'),
  createEvent: (data) => api.post('/events', data),
  updateEvent: (id, data) => api.put(`/events/${id}`, data),
  deleteEvent: (id) => api.delete(`/events/${id}`),
  registerForEvent: (id, data) => api.post(`/events/${id}/register`, data),

  // Blog
  getBlogPosts: (params) => api.get('/blog', { params }),
  getBlogPost: (id) => api.get(`/blog/${id}`),
  getFeaturedPosts: () => api.get('/blog?featured=true'),
  createBlogPost: (data) => api.post('/blog', data),
  updateBlogPost: (id, data) => api.put(`/blog/${id}`, data),
  deleteBlogPost: (id) => api.delete(`/blog/${id}`),

  // Prayer Requests
  getPrayerRequests: (params) => api.get('/prayer-requests', { params }),
  createPrayerRequest: (data) => api.post('/prayer-requests', data),
  updatePrayerRequest: (id, data) => api.put(`/prayer-requests/${id}`, data),

  // Contact
  submitContactForm: (data) => api.post('/contact', data),
  
  // Donations
  createDonation: (data) => api.post('/donations', data),
  getDonations: (params) => api.get('/donations', { params }),

  // Media
  getMediaFiles: (params) => api.get('/media', { params }),
  uploadMedia: (formData) => api.post('/media/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  deleteMedia: (id) => api.delete(`/media/${id}`),

  // Auth
  login: (credentials) => api.post('/auth/login', credentials),
  verifyToken: () => api.get('/auth/verify'),
  refreshToken: () => api.post('/auth/refresh'),

  // Site Settings
  getSiteSettings: () => api.get('/settings'),
  updateSiteSettings: (data) => api.put('/settings', data),

  // Analytics
  getAnalytics: (params) => api.get('/analytics', { params }),
};

export default api;
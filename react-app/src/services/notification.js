import axios from 'axios';

const notification = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/notifications", // URL base del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token en cada petición si está disponible
notification.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default notification;
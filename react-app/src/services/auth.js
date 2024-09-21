import axios from 'axios';

const auth = axios.create({
  baseURL: 'https://choolmanager-production.up.railway.app/auth',  // URL base del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token en cada petición si está disponible
auth.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default auth;
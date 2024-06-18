import axios from 'axios';
import { getSession } from 'next-auth/react';

const apiClient = axios.create({
  baseURL: 'https://your-backend-api.com', // Cambia esto por la URL de tu API backend
});

apiClient.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;


import axios from 'axios';
import { refreshToken } from '../features/auth';

const api = axios.create({
  baseURL: 'http://localhost:5173/api/v1',
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.response.data.message === 'Unauthorized: token expired'
    ) {
      await refreshToken();
      originalRequest.retry = true;
      return api(originalRequest);
    }
  }
);

export default api;

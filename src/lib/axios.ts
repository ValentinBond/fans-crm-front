import axios from 'axios';
import { SERVE_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: SERVE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

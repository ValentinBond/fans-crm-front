import { LoginInputType } from '@/types/auth';
import axios from '@/lib/axios';

export const login = async ({
  email,
  password,
}: LoginInputType): Promise<{ accessToken: string }> => {
  return await axios.post('/auth/login', { email, password });
};

export const refreshToken = async (): Promise<{ accessToken: string }> => {
  return await axios.post('/auth/refresh').then(({ data }) => data);
};

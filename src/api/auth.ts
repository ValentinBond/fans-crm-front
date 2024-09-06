import { LoginInputType } from '@/types/auth';
import axios from '@/lib/axios';

export const login = async ({
  email,
  password,
}: LoginInputType): Promise<{ accessToken: string }> => {
  return await axios.post('/auth/login', {
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
};

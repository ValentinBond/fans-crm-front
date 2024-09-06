import axios from '@/lib/axios';
import { UserOutputType } from '@/types/user';

export const getUserInfo = async (): Promise<UserOutputType> => {
  return await axios.get('/users/profile').then(({ data }) => data);
};

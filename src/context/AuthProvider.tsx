import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';
import { LoginInputType } from '@/types/auth';

import { useNavigate } from 'react-router-dom';
import { login } from '@/src/api';
import { getUserInfo } from '@/api/user';
import { UserOutputType } from '@/types/user';

export type AuthContextProps = {
  isAuthenticated: boolean;
  loginHandler: (credentials: LoginInputType) => Promise<void>;
  user: null | UserOutputType;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserOutputType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Cookies.get('accessToken') && Cookies.get('accessToken') !== 'undefined',
  );

  useEffect(() => {
    if (isAuthenticated && !user) {
      requestUserInfo();
    }
  }, [isAuthenticated, user]);

  const requestUserInfo = async () => {
    try {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    } catch (e) {
      console.error(e);
    }
  };

  const loginHandler = async ({ email, password }: LoginInputType) => {
    try {
      await login({ email, password });

      setIsAuthenticated(true);
      await requestUserInfo();
      navigate('/user');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginHandler, user }}>
      {children}
    </AuthContext.Provider>
  );
};

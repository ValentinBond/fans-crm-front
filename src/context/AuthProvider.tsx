import React, { createContext, useState, ReactNode, FC } from 'react';
import Cookies from 'js-cookie';
import { LoginInputType } from '@/types/auth';
import { login } from '@/src/api';

interface AuthContextProps {
  isAuthenticated: boolean;
  loginHandler: (credentials: LoginInputType) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Cookies.get('accessToken') && Cookies.get('accessToken') !== 'undefined',
  );

  const loginHandler = async ({ email, password }: LoginInputType) => {
    try {
      const data = await login({ email, password });

      Cookies.set('accessToken', data.accessToken);
      setIsAuthenticated(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/src/pages/LoginPage';
import { UserPage } from '@/src/pages/UserPage';
import { AuthProvider } from '@/context/AuthProvider';
import { PrivateRoute } from '@/src/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="user" element={<UserPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

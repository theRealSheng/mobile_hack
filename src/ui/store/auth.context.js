import React, { createContext, useContext, useState, useCallback } from 'react';

import { STATUS_CODES } from 'common/constants/status_codes';

import { LocalStorageService } from 'ui/services';

import { LogInUseCase } from 'core/auth/use_cases';

const AuthContext = createContext(null);

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
};

const initialValues = {
  isLoggedIn: false,
  user: null,
};

const AuthContexProvider = ({ children }) => {
  const [state, setState] = useState(initialValues);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const { isLoggedIn, user } = state;

  const onLogin = useCallback(async () => {
    try {
      const loginRes = await LogInUseCase(email, password);
      if (loginRes.status === STATUS_CODES.STATUS_OK) {
        const { data } = loginRes.data;
        LocalStorageService.setItem('token', data);
      }
    } catch (e) {
      console.warn('AuthContexProvider/onLogin:', e);
    }
  }, [email, password]);

  const onLogout = useCallback(() => {
    setState(initialValues);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        email,
        password,
        onLogin,
        onLogout,
        setEmail,
        setPassword,
        errorMessage,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContexProvider, useAuthContext };

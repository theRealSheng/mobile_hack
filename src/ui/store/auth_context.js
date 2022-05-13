import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider',
    );
  }
  return context;
};

const initialValues = {
  isLoggedIn: false,
  user: null,
};

const AuthContexProvider = ({ children }) => {
  const [state, setState] = useState(initialValues);
  const { isLoggedIn, user } = state;

  const onRegister = useCallback(({ email, password }) => {
    //@TODO - call use case for registering user
  }, []);

  const onLogin = useCallback(({ email, password }) => {
    //@TODO - call use case for fetching info
  }, []);

  const onLogout = useCallback(() => {
    setState(initialValues);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        onRegister,
        onLogin,
        onLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContexProvider, useAuthContext };

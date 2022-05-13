import React from 'react';
import { AuthContexProvider } from './auth_context';

const ContextProviderManager = ({ children }) => {
  return (
    <AuthContexProvider>
      {children}
    </AuthContexProvider>
  );
};

export { ContextProviderManager };

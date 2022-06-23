import React from 'react';
import { AuthContexProvider } from './auth.context';

const ContextProviderManager = ({ children }) => {
  return <AuthContexProvider>{children}</AuthContexProvider>;
};

export { ContextProviderManager };

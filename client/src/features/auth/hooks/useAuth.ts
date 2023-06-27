import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

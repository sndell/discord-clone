import { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../api/getCurrentUser';

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refresh = async () => {
    try {
      const res = await getCurrentUser();
      setUser(res);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};

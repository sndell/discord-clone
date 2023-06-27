import { useEffect } from 'react';

import { useAuth } from './features/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading === false && !user) navigate('/auth/login');
  }, [loading, user, navigate]);

  return <></>;
};

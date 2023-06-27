import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useAuth } from '../features/auth/hooks/useAuth';

export const AppRoutes = () => {
  const { user } = useAuth();
  const routes = user ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes]);
  return <>{element}</>;
};

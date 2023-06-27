import { Outlet } from 'react-router-dom';
import { ServerRoutes } from '../features/server/routes';
import { AppLayout } from '../components/Layout/AppLayout';

export const App = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [{ path: '/server/*', element: <ServerRoutes /> }],
  },
];

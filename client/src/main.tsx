import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import { App } from './App.tsx';
import { AuthProvider } from './features/auth';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '/',
//         element: <App />,
//         children: [
//           {
//             path: 'server',
//             element: <Server />,
//           },
//         ],
//       },
//       {
//         path: 'auth',
//         element: <Auth />,
//         children: [
//           {
//             path: 'login',
//             element: <LoginForm />,
//           },
//           {
//             path: 'register',
//             element: <RegisterForm />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

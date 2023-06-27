import { Route, Routes } from 'react-router-dom';
import { Server } from './Server';

export const ServerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Server />} />
    </Routes>
  );
};

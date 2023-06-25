import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="grid h-[100dvh] place-content-center">
      <Outlet />
    </div>
  );
};

export default Auth;

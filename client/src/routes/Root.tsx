import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="h-[100dvh] bg-background">
      <Outlet />
    </div>
  );
};

export default Root;

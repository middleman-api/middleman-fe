import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute = ({ redirectPath = "/login" }: PrivateRouteProps) => {
  const user = true;
  if (!user) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};

export default PrivateRoute;

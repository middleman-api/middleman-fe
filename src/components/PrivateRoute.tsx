import { useAuth } from "../hooks";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute = ({ redirectPath = "/login" }: PrivateRouteProps) => {
  const user = useAuth((state) => state.user);
  if (!user) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
};

export default PrivateRoute;

import { Redirect, RouteComponentProps } from "@reach/router";
import React from "react";

interface PrivateRouteProps extends RouteComponentProps {
  children: any;
  redirectPath?: string;
}

const PrivateRoute = ({
  children,
  redirectPath = "/login",
}: PrivateRouteProps) => {
  const user = true;
  if (!user) return <Redirect to={redirectPath} replace noThrow />;
  return React.cloneElement(children);
};

export default PrivateRoute;

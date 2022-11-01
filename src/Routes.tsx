import { Location, RouteComponentProps, Router } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PrivateRoute from "./components/PrivateRoute";
import DashboardContainer from "./container/DashboardContainer";
import Home from "./pages/home";
import Proxy from "./pages/proxy";

interface Route {
  isPrivate?: boolean;
  path: string;
  component: ({}: any) => JSX.Element;
  children?: Array<Route>;
}

const generateRoute = (route: Route) => {
  let _children;
  if (route.children) {
    _children = route.children.map(generateRoute);
  }
  if (route.isPrivate) {
    return (
      <PrivateRoute key={route.path} path={route.path}>
        <route.component path={route.path}>{_children}</route.component>
      </PrivateRoute>
    );
  } else {
    return (
      <route.component key={route.path} path={route.path}>
        {_children}
      </route.component>
    );
  }
};

const routes: Route[] = [
  {
    isPrivate: true,
    path: "/",
    component: DashboardContainer,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/proxy/:proxyId",
        component: Proxy,
      },
    ],
  },
];

const constructedRouteComponents = routes.map(generateRoute);

const NotFound = ({}: RouteComponentProps) => <div>Sorry, nothing here.</div>;

const Routes = () => {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            addEndListener={() => {
              return false;
            }}
          >
            <Router>
              {constructedRouteComponents}
              <NotFound default />
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
};

export default Routes;

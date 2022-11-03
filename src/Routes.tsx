import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import {
  Location,
  RouteComponentProps,
  Router,
  RouterProps,
  WindowLocation,
} from "@reach/router";
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

const modalRoutes: Route[] = [
  {
    path: "/proxy/:proxyId",
    component: Proxy,
  },
];

const ConstructedRouteComponents = (props: RouterProps) => {
  return (
    <Router {...props}>
      {routes.map(generateRoute)}
      <NotFound default />
    </Router>
  );
};

const ConstructedModalRouteComponents = (props: RouterProps) => {
  return (
    <Router {...props}>
      {modalRoutes.map(generateRoute)}
      <NotFound default />
    </Router>
  );
};

const NotFound = ({}: RouteComponentProps) => <div>Sorry, nothing here.</div>;

interface LocationState {
  oldLocation?: WindowLocation | null;
  type?: string | null;
}

const Routes = () => {
  return (
    <Location>
      {({ location, navigate }) => {
        const { state } = location as WindowLocation<LocationState>;
        const { oldLocation = null, type = "dialog" } = state || {};
        console.log("location", { location, oldLocation });
        return (
          <>
            <ConstructedRouteComponents
              location={oldLocation !== null ? oldLocation : location}
            />
            <Modal
              closeOnOverlayClick
              isOpen={oldLocation !== null && type === "dialog"}
              onClose={() => {
                //@TODO: Fix Modal wouldn't close
                navigate(oldLocation!.pathname, {
                  state: {
                    oldLocation: null,
                  },
                });
              }}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <ConstructedModalRouteComponents location={location} />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        );
      }}
    </Location>
  );
};

export default Routes;

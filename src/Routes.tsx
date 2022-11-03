import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { RouteObject, RouterProvider, useNavigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import DashboardContainer from "./container/DashboardContainer";
import Home from "./pages/home";
import Proxy from "./pages/proxy";

const NotFound = ({}) => <div>Sorry, nothing here.</div>;

const RoutedModal = ({
  children,
  navigateTo = "/",
}: {
  children: React.ReactNode;
  navigateTo?: string;
}) => {
  const navigate = useNavigate();
  return (
    <Modal
      closeOnOverlayClick
      isOpen={true}
      onClose={() => {
        //@TODO: Fix Modal wouldn't close
        navigate(navigateTo);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

const routes: RouteObject[] = [
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <DashboardContainer />,
        children: [
          {
            path: "/",
            element: <Home />,
            children: [
              {
                path: "/create-proxy",
                element: (
                  <RoutedModal>
                    <Proxy />
                  </RoutedModal>
                ),
              },
            ],
          },
          {
            path: "/proxy/:proxyId",
            element: <Proxy />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const Router = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Router;

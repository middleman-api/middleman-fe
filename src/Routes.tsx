import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router";
import CreateProxy from "./components/CreateProxy";
import PrivateRoute from "./components/PrivateRoute";
import RoutedDrawer from "./components/RoutedDrawer";
import RoutedModal from "./components/RoutedModal";
import DashboardContainer from "./container/DashboardContainer";
import Home from "./pages/home";
import Proxy from "./pages/proxy";

const NotFound = ({}) => <div>Sorry, nothing here.</div>;

const Router = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const containerType =
    location.state && (location.state?.containerType || "MODAL");

  return (
    <>
      <Routes location={background || location}>
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/proxy/:proxyId" element={<Proxy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            element={
              containerType === "MODAL" ? <RoutedModal /> : <RoutedDrawer />
            }
          >
            <Route path="/create-proxy" element={<CreateProxy />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default Router;

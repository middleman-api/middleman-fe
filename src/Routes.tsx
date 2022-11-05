import { Route, Routes, useLocation } from "react-router";
import CreateProxy from "./components/CreateProxy";
import PrivateRoute from "./components/PrivateRoute";
import RoutedDrawer from "./components/RoutedDrawer";
import RoutedModal from "./components/RoutedModal";
import DashboardContainer from "./container/DashboardContainer";
import PublicContainer from "./container/PublicContainer";
import Home from "./pages/home";
import Login from "./pages/Login";
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
        <Route element={<PublicContainer />}>
          <Route path="/login" element={<Login />} />
        </Route>
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

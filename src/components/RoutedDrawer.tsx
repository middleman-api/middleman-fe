import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router";

const RoutedDrawer = ({ navigateTo }: { navigateTo?: string }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      closeOnOverlayClick
      closeOnEsc
      size={"full"}
      isOpen={true}
      isFullHeight
      placement="bottom"
      onClose={() => {
        if (navigateTo) navigate(navigateTo);
        else navigate(-1);
      }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={"16px 32px"}>
          <Outlet />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default RoutedDrawer;

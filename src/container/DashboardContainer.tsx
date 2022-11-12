import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router";
import Footer from "@/components/Footer";

interface DashboardContainerProps {}

const sideMenu = [
  {
    path: "/",
    label: "Home",
    iconName: "home",
  },
  {
    path: "/",
    label: "Home",
    iconName: "home",
  },
  {
    path: "/",
    label: "Home",
    iconName: "home",
  },
  {
    path: "/",
    label: "Home",
    iconName: "home",
  },
];

const SideBar = () => {
  return (
    <Box width={"200px"} p={"16px"}>
      <VStack align={"flex-start"}>
        {sideMenu.map((menu, i) => (
          <Box key={`${new Date().toISOString()}${i}`} p={"8px"}>
            {menu.label}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

const DashboardContainer = ({}: DashboardContainerProps) => {
  return (
    <Flex direction={"column"}>
      <NavBar />
      <Flex
        direction={"row"}
        bgColor={"blackAlpha.100"}
        minH={"calc(100vh - 144px)"}
      >
        <Container maxW={"924px"} py={"32px"} px={"16px"}>
          <Outlet />
        </Container>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default DashboardContainer;

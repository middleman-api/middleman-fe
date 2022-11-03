import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import NavBar from "@/components/NavBar";

interface DashboardContainerProps extends RouteComponentProps {
  children: JSX.Element[];
}

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

const DashboardContainer = ({ children }: DashboardContainerProps) => {
  return (
    <Flex direction={"column"}>
      <NavBar />
      <Flex
        direction={"row"}
        bgColor={"blackAlpha.50"}
        minH={"calc(100vh - 72px)"}
      >
        <Container maxW={"924px"} py={"32px"} px={"16px"}>
          {children}
        </Container>
      </Flex>
    </Flex>
  );
};

export default DashboardContainer;

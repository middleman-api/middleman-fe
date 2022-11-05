import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { UpDownIcon } from "@chakra-ui/icons";
import { Container, Flex, Icon } from "@chakra-ui/react";
import { Outlet } from "react-router";

const PublicNavBar = () => {
  return (
    <Flex
      height={"72px"}
      p={"16px 24px"}
      boxShadow={"0 1px 2px 0 rgba(0, 0, 0, 0.05)"}
      bg={"white"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex alignItems={"center"} justifyContent={"center"} fontWeight={600}>
        <Icon as={UpDownIcon} mr={"4px"} /> Middleman
      </Flex>
    </Flex>
  );
};

const PublicContainer = ({}) => {
  return (
    <Flex direction={"column"}>
      <PublicNavBar />
      <Flex
        direction={"row"}
        bgColor={"blackAlpha.50"}
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

export default PublicContainer;

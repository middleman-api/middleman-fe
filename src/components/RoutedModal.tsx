import {
  Box,
  BoxProps,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Outlet, useNavigate } from "react-router";

const EscClose = (props: BoxProps) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"flex-end"}
      color={"gray.300"}
      cursor={"pointer"}
      {...props}
    >
      <Text fontSize={"14px"} fontWeight={"600"} mr={"4px"}>
        ESC
      </Text>
      <Icon as={XCircleIcon} fontSize={"18px"} />
    </Flex>
  );
};

const RoutedModal = ({ navigateTo }: { navigateTo?: string }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    if (navigateTo) navigate(navigateTo);
    else navigate(-1);
  };
  return (
    <Modal
      closeOnEsc
      closeOnOverlayClick={false}
      isOpen={true}
      onClose={handleClose}
    >
      <ModalOverlay />
      <ModalContent position={"relative"}>
        <Box position={"absolute"} right={"16px"} top={"16px"}>
          <EscClose onClick={handleClose} />
        </Box>
        <ModalBody p={"16px"}>
          <Outlet />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RoutedModal;

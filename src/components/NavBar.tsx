import { UpDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "@reach/router";
import { Command } from "react-command-palette";
import CommandPalette from "./CommandPalette";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const commands: Command[] = [
    {
      id: 1,
      color: "default",
      name: "New Proxy app",
      command() {
        //@TODO: Fix modal doesn't open with route change
        navigate("/proxy/1", {
          state: {
            oldLocation: JSON.parse(JSON.stringify(location)),
          },
        });
      },
    },
    {
      id: 2,
      color: "default",
      name: "Go to app",
      command() {},
    },
  ];
  return (
    <Flex
      w={"100vw"}
      p={"16px 24px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      boxShadow={"0 1px 2px 0 rgba(0, 0, 0, 0.05)"}
      bg={"white"}
    >
      <Flex alignItems={"center"} fontWeight={600}>
        <Icon as={UpDownIcon} mr={"4px"} /> Middleman
      </Flex>
      <Flex>
        <CommandPalette commands={commands} />
      </Flex>
      <Flex alignItems={"center"} fontWeight={600}>
        <Button
          variant="ghost"
          rightIcon={<Icon as={ArrowRightOnRectangleIcon} />}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;

import { UpDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Command } from "react-command-palette";
import { useLocation, useNavigate } from "react-router";
import CommandPalette from "./CommandPalette";
import { useAuth } from "../hooks";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);
  const commands: Command[] = [
    {
      id: 1,
      color: "command",
      name: "Create new proxy app",
      command() {
        navigate("/create-proxy", {
          state: {
            background: JSON.parse(JSON.stringify(location)),
          },
        });
      },
    },
    {
      id: 2,
      color: "command",
      name: "Go to app",
      command() {},
    },
  ];
  return (
    <Flex
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
          onClick={logout}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;

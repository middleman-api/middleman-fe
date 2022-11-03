import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Palette, { Command } from "react-command-palette";

interface CommandPaletteProps {
  commands: Command[];
}

function Header() {
  const wrapperStyle = {
    fontFamily: "arial",
    fontSize: "12px",
    color: "rgb(172, 172, 172)",
    marginBottom: "6px",
    display: "inline-block",
  };

  const kbdStyle = {
    backgroundColor: "rgb(23, 23, 23)",
    fontSize: "12px",
    color: "#b9b9b9",
    padding: "2px 4px",
    marginRight: "6px",
    borderRadius: "4px",
  };

  const itemStyle = { paddingRight: "32px" };

  return (
    <div style={wrapperStyle}>
      <span style={itemStyle}>Search for a command</span>
      <span style={itemStyle}>
        <kbd style={kbdStyle}>↑↓</kbd> to navigate
      </span>
      <span style={itemStyle}>
        <kbd style={kbdStyle}>enter</kbd> to select
      </span>
      <span style={itemStyle}>
        <kbd style={kbdStyle}>esc</kbd> to dismiss
      </span>
    </div>
  );
}

const Trigger = () => {
  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type="text" placeholder="Command" />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="xs" fontSize={"12px"} mr={"4px"}>
          ⌘
        </Button>
        <Button h="1.75rem" size="xs" fontSize={"12px"}>
          K
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

const CommandPalette = ({ commands }: CommandPaletteProps) => {
  return (
    <Palette
      hotKeys={["command+k", "ctrl+k"]}
      header={Header()}
      commands={commands}
      trigger={Trigger()}
      closeOnSelect
      resetInputOnOpen
    />
  );
};

export default CommandPalette;

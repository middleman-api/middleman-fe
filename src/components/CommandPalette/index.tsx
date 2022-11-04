import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Palette, { Command } from "react-command-palette";
// then import the CSS
import "./theme.css";

const theme = {
  modal: "middleman-modal",
  overlay: "middleman-overlay",
  container: "middleman-container",
  content: "middleman-content",
  containerOpen: "middleman-containerOpen",
  input: "middleman-input",
  inputOpen: "middleman-inputOpen",
  inputFocused: "middleman-inputFocused",
  spinner: "middleman-spinner",
  suggestionsContainer: "middleman-suggestionsContainer",
  suggestionsContainerOpen: "middleman-suggestionsContainerOpen",
  suggestionsList: "middleman-suggestionsList",
  suggestion: "middleman-suggestion",
  suggestionFirst: "middleman-suggestionFirst",
  suggestionHighlighted: "middleman-suggestionHighlighted",
  trigger: "middleman-trigger",
};

interface CommandPaletteProps {
  commands: Command[];
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

function RenderCommand(suggestion: Command) {
  // A suggestion object will be passed to your custom component for each command
  const { id, color, name } = suggestion;
  return (
    <Flex justifyContent={"space-between"}>
      <Flex>
        <Text mr={"4px"}>{">"}</Text>
        <Text>{name}</Text>
      </Flex>
      <Text fontStyle={"italic"} fontWeight={400}>
        {color}
      </Text>
    </Flex>
  );
}

const CommandPalette = ({ commands }: CommandPaletteProps) => {
  return (
    <Palette
      theme={theme}
      placeholder={"Search"}
      hotKeys={["command+k", "ctrl+k"]}
      commands={commands}
      trigger={Trigger()}
      renderCommand={RenderCommand}
      closeOnSelect
      resetInputOnOpen
    />
  );
};

export default CommandPalette;

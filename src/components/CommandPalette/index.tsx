import {
  Box,
  Button,
  Flex,
  Icon,
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
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Flex alignItems={"center"}>
        <Text>{name}</Text>
      </Flex>
      <Flex alignItems={"center"} gap={"4px"}>
        <Text fontStyle={"italic"} fontWeight={400}>
          {color}
        </Text>
        <Icon mr={"4px"} transform={"rotate(0deg)"}>
          <svg strokeWidth="2px" viewBox="0 0 20 20" className="css-l5oww">
            <g
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3v4c0 2-2 4-4 4H2"></path>
              <path d="M8 17l-6-6 6-6"></path>
            </g>
          </svg>
        </Icon>
      </Flex>
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

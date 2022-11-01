import {
  Badge,
  Box,
  BoxProps,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { Card } from "./ds";
import CircleIcon from "./CircleIcon";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";

interface ProxyItemProps extends BoxProps {
  status?: "ACTIVE" | "ARCHIVED" | string;
  title: string;
  targetUrl: string;
  proxyUrl: string;
  createdAt: string;
}

const URLItem = ({
  url,
  color = "blue.300",
}: {
  url: string;
  color?: BoxProps["color"];
}) => {
  const { onCopy } = useClipboard(url);
  const toast = useToast();
  const handleClick = () => {
    onCopy();
    toast({
      title: "Copied to clipboard",
      status: "success",
    });
  };
  return (
    <Flex>
      <CircleIcon w={"12px"} mr={"4px"} color={color} />
      <Text fontSize={"12px"} color="gray.500" maxW={"200px"} noOfLines={1}>
        {url}
      </Text>
      <Icon
        as={ClipboardDocumentIcon}
        color="gray.500"
        w={"12px"}
        ml={"4px"}
        cursor={"copy"}
        onClick={handleClick}
      />
    </Flex>
  );
};

const ProxyItem = ({
  status = "ARCHIVED",
  title,
  targetUrl,
  proxyUrl,
  createdAt,
}: ProxyItemProps) => {
  return (
    <Card>
      <Box mb={"8px"}>
        {status === "ACTIVE" ? (
          <Badge colorScheme="green">Active</Badge>
        ) : (
          <Badge>Archived</Badge>
        )}
      </Box>
      <Heading mb={"16px"} maxW={60} size={"sm"} color="gray.700">
        {title}
      </Heading>
      <Box mb={"16px"}>
        <URLItem url={targetUrl} />
        <Divider orientation="vertical" h={"6px"} ml={"5px"} />
        <URLItem url={proxyUrl} />
      </Box>
      <Text fontSize={"10px"} color="gray.400">
        {createdAt}
      </Text>
    </Card>
  );
};

export default ProxyItem;

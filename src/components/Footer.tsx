import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text, Link, Divider } from "@chakra-ui/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Card } from "./ds";

const Footer = () => {
  return (
    <Card boxShadow={"none"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={"8px"} fontSize={"14px"}>
          <Text>Made with</Text> <Icon as={HeartIcon} color={"red.400"} />
        </Flex>
        <Link href="https://github.com/middleman-api" isExternal>
          <Flex alignItems={"center"} fontSize={"14px"}>
            Github <ExternalLinkIcon mx="2px" />
          </Flex>
        </Link>
      </Flex>
    </Card>
  );
};

export default Footer;

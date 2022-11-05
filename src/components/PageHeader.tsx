import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

interface PageHeaderProps {
  showBackNav?: boolean;
  title?: string;
  subTitle?: string;
  actions?: JSX.Element[];
}

const PageHeader = ({
  showBackNav = true,
  title,
  subTitle,
  actions,
}: PageHeaderProps) => {
  const navigate = useNavigate();
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} mb={"32px"}>
      <Flex alignItems={"center"}>
        {showBackNav && (
          <IconButton
            bg={"transparent"}
            onClick={() => navigate(-1)}
            aria-label="go back"
            icon={<Icon as={ChevronLeftIcon} boxSize={"20px"} ml={"-2px"} />}
            rounded={"50px"}
            mr={"16px"}
          />
        )}
        <Box>
          <Text fontSize={"18px"} fontWeight={500}>
            {title}
          </Text>
          <Text fontSize={"14px"} color={"gray.500"}>
            {subTitle}
          </Text>
        </Box>
      </Flex>
      <Flex>{actions}</Flex>
    </Flex>
  );
};

export default PageHeader;

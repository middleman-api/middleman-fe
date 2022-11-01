import ProxyItem from "@/components/ProxyItem";
import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";

interface HomeProps extends RouteComponentProps {
  user: any;
}

const Home = ({}: HomeProps) => {
  return (
    <Box>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="8">
        {[...Array(5)].map((u, i) => (
          <ProxyItem
            key={`${new Date().toISOString()}${i}`}
            status={"ACTIVE"}
            title={`App ${i + 1}`}
            targetUrl={`https://gnews.io/api/v4/ `}
            proxyUrl={`https://3a1f16ef58.to.middleman.rest `}
            createdAt={"1/11/2022 5:30AM"}
            boxShadow="sm"
            p="6"
            rounded="md"
            bg="tomato"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;

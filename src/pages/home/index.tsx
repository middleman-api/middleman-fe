import ProxyItem from "@/components/ProxyItem";
import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";

interface HomeProps extends RouteComponentProps {
  user: any;
}

const Home = ({}: HomeProps) => {
  const handleClick = (id: string, title: string) => {
    console.log(id, title);
  };
  return (
    <Box>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="8">
        {[...Array(5)].map((u, i) => {
          const id = `${new Date().toISOString()}${i}`;
          const title = `App ${i + 1}`;
          return (
            <ProxyItem
              key={id}
              status={"ACTIVE"}
              id={id}
              title={title}
              targetUrl={`https://gnews.io/api/v4/ `}
              proxyUrl={`https://3a1f16ef58.to.middleman.rest `}
              createdAt={"1/11/2022 5:30AM"}
              onClick={() => handleClick(id, title)}
              boxShadow="sm"
              p="6"
              rounded="md"
              bg="tomato"
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Home;

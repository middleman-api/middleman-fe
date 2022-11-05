import ProxyItem from "@/components/ProxyItem";
import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id: string, title: string) => {
    // navigate to proxy details page
    navigate(`/proxy/${id}?${new URLSearchParams({ title })}`);
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
              tabIndex={i}
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
      <Outlet />
    </Box>
  );
};

export default Home;

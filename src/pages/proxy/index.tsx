import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Proxy = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Last name" />
      </FormControl>
      <Button colorScheme="blue" mr={3}>
        Save
      </Button>
    </Box>
  );
};

export default Proxy;

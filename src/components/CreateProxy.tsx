import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { createProxySchema } from "../schemas";

const CreateProxy = () => {
  return (
    <Box>
      <Text fontSize={"20px"} fontWeight={600} mb={"16px"}>
        Create new proxy
      </Text>
      <Formik
        initialValues={{ name: "", endpointURL: "" }}
        validationSchema={createProxySchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Flex direction={"column"} gap={"16px"}>
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="My Mobile App"
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={!!errors.endpointURL && touched.endpointURL}
                >
                  <FormLabel htmlFor="endpointURL">Endpoint URL</FormLabel>
                  <Field
                    as={Input}
                    id="endpointURL"
                    name="endpointURL"
                    placeholder="https://example.com"
                  />
                  <FormErrorMessage>{errors.endpointURL}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme={"teal"}
                  width={"full"}
                  isLoading={isSubmitting}
                >
                  Create Proxy
                </Button>
              </Flex>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default CreateProxy;

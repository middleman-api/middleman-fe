import { Card } from "@/components/ds";
import loginSchema from "@/schemas/login.schema";
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
import { Field, Formik } from "formik";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Card w={["100%", "50%"]}>
        <Flex direction={"column"}>
          <Text fontSize={"20px"} fontWeight={600} mb={"16px"}>
            Welcome,
            <Text color={"gray.400"} fontWeight={400} fontSize={"16px"}>
              Please login to use middleman
            </Text>
          </Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                navigate("/");
              }, 500);
            }}
          >
            {({ errors, touched, isSubmitting, handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Flex direction={"column"} gap={"16px"}>
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel htmlFor="name">Email</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        placeholder="hello@example.com"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="endpointURL">Password</FormLabel>
                      <Field
                        as={Input}
                        type={"password"}
                        id="password"
                        name="password"
                        placeholder="********"
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button
                      type="submit"
                      colorScheme={"teal"}
                      width={"full"}
                      isLoading={isSubmitting}
                    >
                      Login
                    </Button>
                  </Flex>
                </form>
              );
            }}
          </Formik>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;

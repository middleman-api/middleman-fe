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
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router";
import { UserBasic } from "@/models/user-model";
import { getMessageFromThrownError } from "@/utils";
import { generateToken } from "@/services/auth";
import { getCurrentUser } from "@/services/user";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuth((state) => state.login);
  const setToken = useAuth((state) => state.setToken);
  const toast = useToast();

  const handleLogin = async (payload: UserBasic) => {
    try {
      const { data: token } = await generateToken({
        username: payload.username,
        password: payload.password_hash,
      });
      setToken(token);
      const { data: user } = await getCurrentUser();
      login(user);
      navigate("/");
    } catch (e) {
      toast({
        title: "Something went wrong while logging you in.",
        description: getMessageFromThrownError(e),
        status: "error",
      });
      console.error(e);
    }
  };

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Card w={["100%", "50%"]}>
        <Flex direction={"column"}>
          <Text fontSize={"20px"} fontWeight={600}>
            Welcome back,
          </Text>
          <Text
            color={"gray.400"}
            fontWeight={400}
            fontSize={"16px"}
            mb={"16px"}
          >
            Please login to use middleman
          </Text>
          <Formik
            initialValues={{ username: "", password_hash: "" }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await handleLogin(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched, isSubmitting, handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Flex direction={"column"} gap={"16px"}>
                    <FormControl
                      isInvalid={!!errors.username && touched.username}
                    >
                      <FormLabel htmlFor="name">Email</FormLabel>
                      <Field
                        as={Input}
                        id="username"
                        name="username"
                        placeholder="hello@example.com"
                      />
                      <FormErrorMessage>{errors.username}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={
                        !!errors.password_hash && touched.password_hash
                      }
                    >
                      <FormLabel htmlFor="endpointURL">Password</FormLabel>
                      <Field
                        as={Input}
                        type={"password"}
                        id="password_hash"
                        name="password_hash"
                        placeholder="********"
                      />
                      <FormErrorMessage>
                        {errors.password_hash}
                      </FormErrorMessage>
                    </FormControl>
                    <Button
                      type="submit"
                      colorScheme={"teal"}
                      width={"full"}
                      isLoading={isSubmitting}
                    >
                      Login
                    </Button>
                    <Button
                      variant={"link"}
                      colorScheme={"teal"}
                      width={"full"}
                      size={"sm"}
                      onClick={() => navigate("/signup")}
                    >
                      Signup for a new account
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

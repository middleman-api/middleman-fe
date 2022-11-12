import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password_hash: yup.string().min(6).required(),
});

export default loginSchema;

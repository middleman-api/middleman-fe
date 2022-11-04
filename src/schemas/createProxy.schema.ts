import * as yup from "yup";

const createProxy = yup.object().shape({
  name: yup.string().required("Proxy name is required"),
  endpointURL: yup
    .string()
    .url("Invalid endpoint url. eg: https://example.com")
    .required("Endpoint URL required"),
});

export default createProxy;

import { UserBasic } from "models/user-model";
import api from "./api";

const generateToken = (payload: UserBasic) => {
  return api.post<string>(`/dashboard/token`, payload);
};

export { generateToken };

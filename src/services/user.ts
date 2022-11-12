import { User, UserBasic } from "models/user-model";
import api from "./api";

const getCurrentUser = () => {
  return api.get<User>(`/dashboard/user/me`);
};

const createUser = (payload: UserBasic) => {
  return api.post<User>(`/dashboard/users`, payload);
};

export { createUser, getCurrentUser };

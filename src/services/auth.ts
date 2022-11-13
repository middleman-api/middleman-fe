import { Token } from "@/models/token-model";
import { UserStandard } from "models/user-model";
import api from "./api";

const generateToken = (payload: UserStandard) => {
  return api.post<Token>(`/dashboard/token`, payload, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export { generateToken };

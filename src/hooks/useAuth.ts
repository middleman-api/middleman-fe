import { Token } from "@/models/token-model";
import { User } from "@/models/user-model";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: User | undefined;
  token: Token | undefined;
  login: (user: User) => void;
  setToken: (token: Token) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: undefined,
        token: undefined,
        login: (user: User) => set((state) => ({ ...state, user })),
        setToken: (token: Token) => set((state) => ({ ...state, token })),
        logout: () => set({ user: undefined }),
      }),
      { name: "auth" }
    )
  )
);

export default useAuth;

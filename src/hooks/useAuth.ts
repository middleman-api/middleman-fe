import { User } from "@/models/user-model";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: User | undefined;
  token: string | undefined;
  login: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        token: undefined,
        login: (user: User) => set((state) => ({ ...state, user })),
        setToken: (token: string) => set((state) => ({ ...state, token })),
        logout: () => set({ user: undefined }),
      }),
      { name: "auth" }
    )
  )
);

export default useAuth;

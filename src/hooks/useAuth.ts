import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        login: (user: any) => set((state) => ({ user })),
        logout: () => set({ user: undefined }),
      }),
      { name: "auth" }
    )
  )
);

export default useAuth;

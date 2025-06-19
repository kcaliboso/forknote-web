import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types/models/User";

interface AuthStore {
  user: User | null;
  redirect: boolean;
  saveAuth: (user: User) => void;
  clear: () => void;
  setRedirect: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      redirect: true,
      saveAuth: (user) => {
        set({ user: user });
      },
      clear: () => {
        set({ user: null });
      },
      setRedirect: () => {
        set({ redirect: false });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

const clearAuthStore = (fromLogout = true) => {
  useAuthStore.getState().clear();
  useAuthStore.persist.clearStorage();

  if (fromLogout) {
    useAuthStore.getState().setRedirect();
  }
};

export { useAuthStore, clearAuthStore };

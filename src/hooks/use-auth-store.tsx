import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IAuthStore {
  isLoggedIn: boolean;
  userEmail: string;
  showSignInModal: boolean;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoggedIn: false,
  userEmail: "",
  showSignInModal: false,
}));

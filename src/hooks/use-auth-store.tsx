import { create } from "zustand";

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

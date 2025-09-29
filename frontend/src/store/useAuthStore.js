import create from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "fattah", _id: 123, age: 25 },
  isLoggedIn: false,
  isLoggedIn: false,
  login: () => {
    console.log("We just logged in");
    set({ isLoggedIn: true, isLoggedIn: true });
  },
}));

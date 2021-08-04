import axios from "axios";
import create from "zustand";

export const useUser = create((set) => ({
  user: null,
  logged_in: false,
  signIn: async () => {
    try {
      const { data: user } = await axios.get("http://localhost:1337/me", {
        withCredentials: true,
      });

      set({ user, logged_in: true });
    } catch (err) {
      null;
    }
  },
}));

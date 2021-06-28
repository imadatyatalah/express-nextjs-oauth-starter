import { parseCookies } from "nookies";
import create from "zustand";

export const useUser = create((set) => ({
  user: null,
  logged_in: false,
  signIn: async () => {
    const { gh_token } = parseCookies();

    const res = await fetch("http://localhost:1337/me", {
      headers: { token: gh_token },
    });
    const user = await res.json();

    if (!user.error) {
      set({ logged_in: true });
    }

    set({ user });
  },
}));

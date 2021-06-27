import { parseCookies } from "nookies";
import create from "zustand";

export const useUser = create((set) => ({
  user: null,
  signIn: async () => {
    const { gh_token } = parseCookies();

    const res = await fetch("http://localhost:1337/me", {
      headers: { token: gh_token },
    });

    set({ user: await res.json() });
  },
}));

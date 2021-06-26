import { useEffect, useState } from "react";

import { parseCookies } from "nookies";

const getUser = async () => {
  const { gh_token } = parseCookies();

  const res = await fetch("http://localhost:1337/me", {
    headers: { token: gh_token },
  });

  const data = await res.json();

  return data;
};

const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  return { user };
};

export default useUser;

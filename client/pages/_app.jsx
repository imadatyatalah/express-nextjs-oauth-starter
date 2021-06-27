import { useEffect } from "react";

import { useUser } from "../hooks/useUser";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const signIn = useUser((state) => state.signIn);

  useEffect(() => {
    signIn();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Router from "next/router";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";

import { useUser } from "@/stores/useUser";
import Global from "@/layouts/global";
import SEO from "next-seo.config";

import "nprogress/nprogress.css";
import "@/styles/globals.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }) => {
  const signIn = useUser((state) => state.signIn);

  useEffect(() => {
    signIn();
  }, [signIn]);

  return (
    <>
      <ThemeProvider
        attribute="class"
        forcedTheme={Component.theme || undefined}
      >
        <DefaultSeo {...SEO} />
        <Global>
          <Component {...pageProps} />
        </Global>
      </ThemeProvider>
    </>
  );
};

export default MyApp;

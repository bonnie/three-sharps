/* eslint-disable react/jsx-props-no-spreading */
// adapted from https://github.com/mantinedev/mantine-next-template/blob/master/pages/_app.tsx
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { getCookie, setCookie } from "cookies-next";
import NextApp, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { colorSchemes, theme } from "@/styles/theme";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme: propsColorScheme } = props;

  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    propsColorScheme ?? preferredColorScheme,
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Head>
        <title>Three Sharps Consulting</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
        container={{
          // container id for badge
          element: "recaptcha-badge",
          parameters: {
            badge: "inline",
            theme: "dark",
          },
        }}
      >
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ ...theme, ...colorSchemes[colorScheme] }}
            withGlobalStyles
            withNormalizeCSS
          >
            <NotificationsProvider>
              <Component {...pageProps} />
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </GoogleReCaptchaProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark",
  };
};

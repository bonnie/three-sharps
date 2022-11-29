/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import React, { ReactElement, ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function render(
  ui: React.ReactElement,
  { ...renderOptions }: RenderOptions = {},
): RenderResult {
  function Providers({ children }: { children?: ReactNode }): ReactElement {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      >
        <ColorSchemeProvider colorScheme="light" toggleColorScheme={jest.fn()}>
          <MantineProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </GoogleReCaptchaProvider>
    );
  }

  return rtlRender(ui, { wrapper: Providers, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };

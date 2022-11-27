/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import React, { ReactElement, ReactNode } from "react";

function render(
  ui: React.ReactElement,
  { ...renderOptions }: RenderOptions = {},
): RenderResult {
  function Providers({ children }: { children?: ReactNode }): ReactElement {
    return (
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={jest.fn()}>
        <MantineProvider>{children}</MantineProvider>
      </ColorSchemeProvider>
    );
  }

  return rtlRender(ui, { wrapper: Providers, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };

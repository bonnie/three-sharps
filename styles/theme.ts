import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  headings: {
    fontFamily: "Gentium Book Basic, serif",
  },
  fontFamily: "Source Sans Pro, sans-serif",
  colors: {
    blue: [
      "#eef3f7",
      "#cbdce7",
      "#a8c5d6",
      "#86aec6",
      "#6397b6",
      "#497e9c",
      "#396279",
      "#294657",
      "#182a34",
      "#080e11",
    ],
  },
  primaryColor: "blue",
  white: "#eef3f7",
  black: "#080e11",
  activeStyles: { transform: "scale(0.95)" },
  loader: "dots",
  other: {
    navHeight: 60,
  },
};

const lightColorScheme: MantineThemeOverride = {
  colorScheme: "light",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  components: {
    Anchor: {
      // Subscribe to theme and component params
      styles: (theme) => ({
        root: {
          color: theme.colors.blue[5],
          fontWeight: 600,
        },
      }),
    },
  },
};

const darkColorScheme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    lightBlue: [
      "#f6f9fb",
      "#e5edf2",
      "#d4e0ea",
      "#c3d4e2",
      "#b2c8d9",
      "#a1bbd1",
      "#90afc9",
      "#7ea3c0",
      "#6d96b8",
      "#5c8ab0",
    ],
  },
  defaultGradient: { from: "lightBlue", to: "cyan", deg: 45 },
  components: {
    Anchor: {
      // Subscribe to theme and component params
      styles: (theme) => ({
        root: {
          color: theme.colors.blue[2],
          fontWeight: 600,
        },
      }),
    },
  },
};

export const colorSchemes = { light: lightColorScheme, dark: darkColorScheme };

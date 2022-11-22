// inspired by https://tympanus.net/Development/ScrollingLettersAnimation/index3.html
// code adapted from https://dev.to/chaituknag/animate-on-scroll-in-react-35e5

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  titleText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "20px",
    fontSize: "1.5em",
    letterSpacing: "1px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[2]
        : theme.colors.blue[7],

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      paddingLeft: 0,
    },
  },

  titleBorder: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[2] : theme.colors.blue[7]
    }`,
  },
}));

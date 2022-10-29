// inspired by https://tympanus.net/Development/ScrollingLettersAnimation/index3.html
// code adapted from https://dev.to/chaituknag/animate-on-scroll-in-react-35e5

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  titleText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "20px",
    padding: "20px",
    fontSize: "1.5em",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[2]
        : theme.colors.blue[7],
  },

  titleBorder: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[2] : theme.colors.blue[7]
    }`,
  },
  //   titleText: {
  //     margin: 0,
  //     textTransform: "lowercase",
  //     fontWeight: "normal",
  //     fontSize: "8vw",
  //     position: "absolute",
  //     bottom: "6vmax",
  //     left: 0,
  //     paddingLeft: "6vmax",
  //     zIndex: 1000,
  //     lineHeight: 0.8,
  //   },
}));

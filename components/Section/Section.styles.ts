// inspired by https://tympanus.net/Development/ScrollingLettersAnimation/index3.html
// code adapted from https://dev.to/chaituknag/animate-on-scroll-in-react-35e5

import { createStyles } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export const useStyles = createStyles((theme) => {
  const { height } = useViewportSize();

  return {
    titleText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      margin: "20px",
      padding: "20px",
      fontSize: "1.5em",
    },

    contentSection: {
      minHeight: height - theme.other.navHeight,
    },
  };
});

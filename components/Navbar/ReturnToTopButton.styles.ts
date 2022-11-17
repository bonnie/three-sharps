import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  returnIcon: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    transitionProperty: "bottom opacity",
    transitionDuration: "0.3s",

    "&:hover": {
      cursor: "pointer",
      bottom: "12px",
    },
  },

  returnIconHidden: {
    opacity: 0,
  },
}));

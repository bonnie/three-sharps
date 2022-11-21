import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  returnButton: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    transitionProperty: "bottom opacity",
    transitionDuration: "0.3s",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[9]
        : theme.colors.blue[0],

    "&:hover": {
      cursor: "pointer",
      bottom: "12px",
    },

    "&:focus": {
      outline: "none",
    },
  },

  returnButtonHidden: {
    opacity: 0,
  },

  returnIcon: {},
}));

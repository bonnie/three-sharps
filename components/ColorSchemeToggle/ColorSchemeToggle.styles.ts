import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  toggle: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[9]
        : theme.colors.blue[0],
    borderRadius: theme.radius.xl,
    alignSelf: "center",

    "&:focus": {
      outline: "none",
    },
  },
}));

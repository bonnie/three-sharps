import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  link: {
    width: 100,
    height: theme.other.navHeight,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    positionContent: "center",
    align: "center",
    padding: "10px",
    fontFamily: theme.headings.fontFamily,
    fontSize: 24,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

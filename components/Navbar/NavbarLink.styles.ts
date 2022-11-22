import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  link: {
    height: theme.other.navHeight,
    borderRadius: theme.radius.md,
    textAlign: "center",
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
      textDecoration: "none",
    },
    "&:focus": {
      outline: "none",
    },
  },
  textLink: {
    width: 110,
  },
  iconLink: {},
}));

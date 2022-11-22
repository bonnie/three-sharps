import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  link: {
    borderRadius: theme.radius.md,
    textAlign: "center",
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
    height: theme.other.navHeight,
    width: 110,
  },
  iconLink: {
    paddingTop: "20px",
  },
}));

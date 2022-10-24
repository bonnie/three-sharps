// adapted from https://github.com/mantinedev/mantine-next-template/blob/master/components/Welcome/Welcome.styles.ts
import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan("md")]: {
      fontSize: 50,
    },
  },
}));

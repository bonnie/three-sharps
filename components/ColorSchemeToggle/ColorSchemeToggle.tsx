// adapted from https://github.com/mantinedev/mantine-next-template/tree/master/components/ColorSchemeToggle
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

import { useStyles } from "./ColorSchemeToggle.styles";

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <ActionIcon
      className={classes.toggle}
      onClick={() => toggleColorScheme()}
      size="xl"
      variant="gradient"
    >
      {colorScheme === "dark" ? (
        <IconSun size={24} stroke={1.5} />
      ) : (
        <IconMoonStars size={20} stroke={1.5} />
      )}
    </ActionIcon>
  );
}

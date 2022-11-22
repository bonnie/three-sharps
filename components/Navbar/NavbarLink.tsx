import { Anchor, ThemeIcon } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { TablerIcon } from "@tabler/icons";

import { useStyles } from "./NavbarLink.styles";

interface NavbarLinkProps {
  Icon: TablerIcon | null;
  label: string;
}

export function NavbarLink({ Icon, label }: NavbarLinkProps) {
  const wideEnough = useMediaQuery("(min-width: 500px)");

  const { classes, cx } = useStyles();

  return (
    // TODO: center text
    <Anchor
      className={cx(
        classes.link,
        wideEnough ? classes.textLink : classes.iconLink,
      )}
      href={`#${label}`}
    >
      {wideEnough || !Icon ? (
        label
      ) : (
        <ThemeIcon radius="xl" size="lg" color="cyan">
          <Icon />
        </ThemeIcon>
      )}
    </Anchor>
  );
}

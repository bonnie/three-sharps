import { Anchor, ThemeIcon } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

import { useMobileWidth } from "@/hooks/useMobileWidth";

import { useStyles } from "./NavbarLink.styles";

interface NavbarLinkProps {
  Icon: TablerIcon | null;
  label: string;
}

export function NavbarLink({ Icon, label }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  const mobileWidth = useMobileWidth();

  return (
    <Anchor
      className={cx(
        classes.link,
        mobileWidth ? classes.iconLink : classes.textLink,
      )}
      href={`#${label}`}
    >
      {!mobileWidth || !Icon ? (
        label
      ) : (
        <ThemeIcon radius="xl" size="lg" color="cyan">
          <Icon />
        </ThemeIcon>
      )}
    </Anchor>
  );
}

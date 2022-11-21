import { Text } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

import { useStyles } from "./NavbarLink.styles";
import { ScrollIntoView } from "./types";

interface NavbarLinkProps {
  icon: TablerIcon | null;
  label: string;
  active?: boolean;
  setActive: () => void;
  scrollIntoView: ScrollIntoView;
}

NavbarLink.defaultProps = {
  active: false,
};

export function NavbarLink({
  icon,
  label,
  active,
  setActive,
  scrollIntoView,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  const onClick = () => {
    setActive();
    scrollIntoView({ alignment: "end" });
  };

  return (
    // TODO: center text
    // TODO: icons for small/xs media?
    <Text className={cx(classes.link)} onClick={onClick}>
      {label}
    </Text>
  );
}

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
    // <Tooltip label={label} position="right" transitionDuration={0}>
    //   <UnstyledButton
    //     onClick={onClick}
    //     className={cx(classes.link, { [classes.active]: active })}
    //   >
    //     <Icon stroke={1.5} />
    //   </UnstyledButton>
    // </Tooltip>

    // TODO: center text
    // TODO: icons for small/xs media?
    <Text
      className={cx(classes.link, { [classes.active]: active })}
      onClick={onClick}
    >
      {label}
    </Text>
  );
}

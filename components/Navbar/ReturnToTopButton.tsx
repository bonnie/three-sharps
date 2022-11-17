import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUpCircle } from "@tabler/icons";

import { useReturnToTop } from "./hooks/useReturnToTop";
import { useStyles } from "./ReturnToTopButton.styles";

export function ReturnToTopButton() {
  const [scroll] = useWindowScroll();
  const { classes } = useStyles();
  const returnToTop = useReturnToTop();

  const hiddenClass = scroll.y < 20 ? classes.returnIconHidden : "";

  return (
    <IconArrowUpCircle
      onClick={returnToTop}
      className={`${classes.returnIcon} ${hiddenClass}`}
      size={36}
    />
  );
}

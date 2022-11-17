import { ActionIcon } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUpCircle } from "@tabler/icons";

import { useReturnToTop } from "./hooks/useReturnToTop";
import { useStyles } from "./ReturnToTopButton.styles";

export function ReturnToTopButton() {
  const [scroll] = useWindowScroll();
  const { classes } = useStyles();
  const returnToTop = useReturnToTop();

  const hiddenClass = scroll.y < 20 ? classes.returnButtonHidden : "";

  return (
    <ActionIcon
      size="xl"
      variant="gradient"
      radius="xl"
      className={`${classes.returnButton} ${hiddenClass}`}
      onClick={returnToTop}
    >
      <IconArrowUpCircle size="xl" stroke="1.25px" />
    </ActionIcon>
  );
}

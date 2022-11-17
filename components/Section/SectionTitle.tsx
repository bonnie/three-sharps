// inspired by https://tympanus.net/Development/ScrollingLettersAnimation/index3.html
// code adapted from https://dev.to/chaituknag/animate-on-scroll-in-react-35e5

import { Box, Title } from "@mantine/core";

import { useStyles } from "./SectionTitle.styles";

export function SectionTitle({ title }: { title: string }) {
  const { classes } = useStyles();

  return (
    <Box className={`${classes.titleText} ${classes.titleBorder}`}>
      <Title>{title}</Title>
    </Box>
  );
}

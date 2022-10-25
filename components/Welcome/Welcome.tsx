// adapted from https://github.com/mantinedev/mantine-next-template/tree/master/components/Welcome
import { Title, Text, Anchor } from "@mantine/core";
import useStyles from "./Welcome.styles";
import { AnimatedLogo } from "@/components/AnimatedLogo/AnimatedLogo";

export function Welcome() {
  const { classes } = useStyles();

  const scaleY = {
    in: { opacity: 0, transform: "scaleY(0)" },
    out: { opacity: 1, transform: "scaleY(1)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity",
  };

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to Three Sharps
      </Title>
      <AnimatedLogo />
      <Text
        color="dimmed"
        align="center"
        size="lg"
        sx={{ maxWidth: 580 }}
        mx="auto"
        mt="xl"
      >
        JavaScript consulting specializing in React, front-end testing, and
        employee training.
      </Text>
      <Text>
        <Anchor href="https://bonnie.dev">Bonnie Schulkin</Anchor>, Principal
      </Text>
    </>
  );
}

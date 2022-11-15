import { Text, Title } from "@mantine/core";

import { AnimatedLogo } from "@/components/AnimatedLogo/AnimatedLogo";
import { useStyles } from "@/components/Section/Section.styles";

export function Welcome() {
  const { classes } = useStyles();
  return (
    <section className={classes.contentSection}>
      <AnimatedLogo />
      <Title order={1} mt={8} align="center">
        JavaScript consulting
      </Title>
      <Text
        variant="gradient"
        size="xl"
        weight={600}
        sx={{ maxWidth: 580 }}
        mt="xl"
        align="center"
        mx="auto"
      >
        front-end testing / React / individual and corporate training
      </Text>
    </section>
  );
}

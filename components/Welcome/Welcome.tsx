import { Anchor, Text, Title } from "@mantine/core";

import { AnimatedLogo } from "@/components/AnimatedLogo/AnimatedLogo";

export function Welcome() {
  return (
    <>
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
        front-end testing / React / employee training
      </Text>
      <Text align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        <Anchor href="https://bonnie.dev">Bonnie Schulkin</Anchor>, Principal
      </Text>
    </>
  );
}

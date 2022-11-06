import { Text, Title } from "@mantine/core";
import { MutableRefObject } from "react";

import { AnimatedLogo } from "@/components/AnimatedLogo/AnimatedLogo";
import { Section } from "@/components/Section/Section";

export function Welcome({ ref }: { ref: MutableRefObject<HTMLDivElement> }) {
  return (
    <Section title={null} rootRef={ref}>
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
    </Section>
  );
}

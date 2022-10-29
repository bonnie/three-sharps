import { Anchor, Text } from "@mantine/core";

import { Section } from "@/components/Section/Section";

export function About() {
  return (
    <Section title="About">
      <Text align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        <Anchor href="https://bonnie.dev">Bonnie Schulkin</Anchor>, Principal
      </Text>
    </Section>
  );
}

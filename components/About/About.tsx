import { Anchor, Text } from "@mantine/core";
import { MutableRefObject } from "react";

import { Section } from "@/components/Section/Section";

export function About({ ref }: { ref: MutableRefObject<HTMLDivElement> }) {
  return (
    <Section title="About" rootRef={ref}>
      <Text align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        <Anchor href="https://bonnie.dev">Bonnie Schulkin</Anchor>, Principal
      </Text>
    </Section>
  );
}

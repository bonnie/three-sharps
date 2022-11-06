import { Text } from "@mantine/core";
import { MutableRefObject } from "react";

import { Section } from "@/components/Section/Section";

export function Contact({ ref }: { ref: MutableRefObject<HTMLDivElement> }) {
  return (
    <Section title="Contact" rootRef={ref}>
      <Text>Contact form here</Text>
    </Section>
  );
}

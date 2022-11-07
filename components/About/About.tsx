import { Anchor, Text } from "@mantine/core";
import { FunctionComponent, PropsWithChildren } from "react";

export function About({
  Wrapper,
}: {
  Wrapper: FunctionComponent<PropsWithChildren<{}>>;
}) {
  return (
    <Wrapper>
      <Text align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        <Anchor href="https://bonnie.dev">Bonnie Schulkin</Anchor>, Principal
      </Text>
    </Wrapper>
  );
}

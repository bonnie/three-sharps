import { Text, Title } from "@mantine/core";
import { FunctionComponent, PropsWithChildren } from "react";

import { AnimatedLogo } from "@/components/AnimatedLogo/AnimatedLogo";

export function Welcome({
  Wrapper,
}: {
  Wrapper: FunctionComponent<PropsWithChildren<{}>>;
}) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

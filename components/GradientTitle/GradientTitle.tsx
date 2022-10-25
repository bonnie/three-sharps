import { Text } from "@mantine/core";
import React from "react";

export function GradientTitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <Text variant="gradient" size="xl" weight={600}>
      {children}
    </Text>
  );
}

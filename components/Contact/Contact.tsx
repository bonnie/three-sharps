import { Text } from "@mantine/core";
import { FunctionComponent, PropsWithChildren } from "react";

export function Contact({
  Wrapper,
}: {
  Wrapper: FunctionComponent<PropsWithChildren<{}>>;
}) {
  return (
    <Wrapper>
      <Text>Contact form here</Text>
    </Wrapper>
  );
}

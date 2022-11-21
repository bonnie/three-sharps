import { MantineColor, Paper, Text, ThemeIcon } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

export function OfferingCard({
  Icon,
  text,
  color,
}: {
  Icon: TablerIcon;
  text: string;
  color: MantineColor;
}) {
  return (
    // @ts-ignore  Paper doesn't accept 'align' but it has an effect
    <Paper shadow="sm" radius="md" p="md" align="center">
      <ThemeIcon radius="xl" size="xl" color={color}>
        <Icon />
      </ThemeIcon>
      <Text>{text}</Text>
    </Paper>
  );
}

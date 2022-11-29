import { Notification, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

export function SuccessToast({
  display,
  onClose,
}: {
  display: boolean;
  onClose: () => void;
}) {
  return display ? (
    <Notification
      mt={10}
      icon={<IconCheck size={18} stroke="4px" />}
      color="lime"
      closeButtonProps={{
        "aria-label": "Hide notification",
        color: "lime",
        iconSize: 20,
        radius: "xl",
      }}
      onClose={onClose}
      sx={{ backgroundColor: "teal" }}
    >
      <Text size="xl" color="white">
        Message sent!
      </Text>
    </Notification>
  ) : null;
}

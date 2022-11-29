import { Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

export function SuccessToast({
  display,
  onClose,
}: {
  display: boolean;
  onClose: () => void;
}) {
  return (
    <Notification
      mt={10}
      icon={<IconCheck size={18} />}
      color="teal"
      closeButtonProps={{ "aria-label": "Hide notification" }}
      onClose={onClose}
      sx={{ display: display ? "inline" : "none" }}
    >
      Message sent!
    </Notification>
  );
}

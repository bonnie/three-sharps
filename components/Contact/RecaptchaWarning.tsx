import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";

export function RecaptchaWarning({ display }: { display: boolean }) {
  return (
    <Alert
      icon={<IconAlertCircle size={16} />}
      title="Recaptcha failed!"
      color="red"
      sx={{ display: display ? "inline" : "none" }}
    >
      Please refresh the page and try again.
    </Alert>
  );
}

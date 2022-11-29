/* eslint-disable react/jsx-props-no-spreading */
import {
  Alert,
  Box,
  Button,
  Group,
  Notification,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import * as Sentry from "@sentry/nextjs";
import { IconAlertCircle, IconCheck } from "@tabler/icons";
import axios from "axios";
import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { EmailData } from "@/utils/email";

const RECAPTCHA_SCORE_THRESHOLD = 0.6;

export function Contact({
  Wrapper,
}: {
  Wrapper: FunctionComponent<PropsWithChildren<{}>>;
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaFailed, setRecaptaFailed] = useState(false);
  const [mailInProgress, setMailInProgress] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const initialValues: EmailData = {
    originatorEmail: "",
    originatorName: "",
    subject: "",
    body: "",
  };

  const form = useForm({
    initialValues,
    validate: {
      originatorEmail: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email",
    },
  });

  const handleSubmit = async (values: EmailData) => {
    setRecaptaFailed(false);
    setMailInProgress(true);

    const recaptchaVerified = await handleReCaptchaVerify(values);
    if (!recaptchaVerified) {
      setRecaptaFailed(true);
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ROOT_URL}/api/send-email`,
        {
          headers: { "Content-Type": "application/json" },
          data: values,
        },
      );
    } catch (error: unknown) {
      Sentry.captureException(`FAILURE: Could not submit mail form
      Form values: ${values}
      ---
      Error: ${error}`);
    }

    setMailInProgress(false);
  };

  const handleReCaptchaVerify = useCallback(
    async (values: EmailData): Promise<boolean> => {
      if (!executeRecaptcha) {
        Sentry.captureException(
          `Recaptcha invoked before execute was available`,
        );
        return false;
      }

      const token = await executeRecaptcha("sendEmail");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ROOT_URL}/api/process-recaptcha`,
        { headers: { "Content-Type": "application/json" }, data: { token } },
      );

      if (!response.data.success) {
        Sentry.captureException(
          `RECAPTCHA FAILED with error code(s) ${response.data[
            "error-codes"
          ].toString()}`,
          { tags: values },
        );
        setMailInProgress(false);
        return false;
      }

      const recaptchaVerified =
        response.data.score >= RECAPTCHA_SCORE_THRESHOLD;

      if (recaptchaVerified) {
        setShowSuccessAlert(true);
      } else {
        setMailInProgress(false);
        Sentry.captureException(
          `RECAPTCHA VERIFICATION FAILED with score ${response.data.score}`,
          { tags: values },
        );
      }

      return recaptchaVerified;
    },
    [executeRecaptcha],
  );

  return (
    <Wrapper>
      <Box sx={{ maxWidth: 500 }} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            size="lg"
            required
            label="Name"
            placeholder="Jane Doe"
            {...form.getInputProps("originatorName")}
          />

          <TextInput
            size="lg"
            mt={15}
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("originatorEmail")}
          />

          <TextInput
            size="lg"
            mt={15}
            required
            label="What can I help with?"
            placeholder="what you need, in a few words"
            {...form.getInputProps("subject")}
          />

          <Textarea
            size="lg"
            mt={15}
            label="More details"
            placeholder="tell me about your timeframe, your tech stack, or other relevant details"
            autosize
            minRows={4}
            maxRows={16}
            {...form.getInputProps("body")}
          />
          {recaptchaFailed ? (
            <Alert
              icon={<IconAlertCircle size={16} />}
              title="Recaptcha failed!"
              color="red"
            >
              Please refresh the page and try again.
            </Alert>
          ) : null}

          <Group position="right" mt="md">
            <Button size="lg" type="submit" loading={mailInProgress}>
              Send message
            </Button>
          </Group>
        </form>
        {showSuccessAlert ? (
          <Notification
            mt={10}
            icon={<IconCheck size={18} />}
            color="teal"
            closeButtonProps={{ "aria-label": "Hide notification" }}
            onClose={() => setShowSuccessAlert(false)}
          >
            Message sent!
          </Notification>
        ) : null}
        <Box mt="xl">
          <div id="recaptcha-badge" />
        </Box>
      </Box>
    </Wrapper>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import * as Sentry from "@sentry/nextjs";
import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { EmailData } from "@/utils/email";

import { RecaptchaWarning } from "./RecaptchaWarning";
import { SuccessToast } from "./SuccessToast";
import { sendEmailRequest, sendTokenValidationRequest } from "./utils";

export function Contact({
  Wrapper,
}: {
  Wrapper: FunctionComponent<PropsWithChildren<{}>>;
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaFailed, setRecaptchaFailed] = useState(false);
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
    setRecaptchaFailed(false);
    setMailInProgress(true);

    const recaptchaVerified = await handleReCaptchaVerify(values);
    if (!recaptchaVerified) {
      setRecaptchaFailed(true);
      return;
    }

    const mailSuccess = await sendEmailRequest(values);
    if (mailSuccess) setShowSuccessAlert(true);

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
      const tokenIsValid = await sendTokenValidationRequest(token, values);

      return tokenIsValid;
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
          <RecaptchaWarning display={recaptchaFailed} />

          <Group position="right" mt="md">
            <Button size="lg" type="submit" loading={mailInProgress}>
              Send message
            </Button>
          </Group>
        </form>
        <SuccessToast
          display={showSuccessAlert}
          onClose={() => setShowSuccessAlert(false)}
        />
        <Box mt="xl">
          <div id="recaptcha-badge" />
        </Box>
      </Box>
    </Wrapper>
  );
}

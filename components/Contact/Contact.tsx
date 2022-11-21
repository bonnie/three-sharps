/* eslint-disable react/jsx-props-no-spreading */
import { Alert, Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAlertCircle } from "@tabler/icons";
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

    const recaptchaVerified = await handleReCaptchaVerify();
    if (!recaptchaVerified) {
      setRecaptaFailed(true);
      return;
    }

    try {
      console.log("VALUES", values);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ROOT_URL}/api/send-email`,
        {
          headers: { "Content-Type": "application/json" },
          data: values,
        },
      );
      console.log("submitted", response);
    } catch (error: unknown) {
      // TODO: sentry
      console.error("could not submit form", error);
    }
  };

  const handleReCaptchaVerify = useCallback(async (): Promise<boolean> => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return false;
    }

    const token = await executeRecaptcha("sendEmail");

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_ROOT_URL}/api/process-recaptcha`,
      { headers: { "Content-Type": "application/json" }, data: { token } },
    );

    console.log("** recaptcha score", response.data.score);
    const recaptchaVerified =
      response.data.success && response.data.score >= RECAPTCHA_SCORE_THRESHOLD;

    return recaptchaVerified;
  }, [executeRecaptcha]);

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
              mt="lg"
              icon={<IconAlertCircle size={16} />}
              title="Recaptcha failed!"
              color="red"
            >
              Please try again.
            </Alert>
          ) : null}
          <Group position="right" mt="md">
            <Button type="submit">Send message</Button>
          </Group>
        </form>
        <Box mt="xl">
          <div id="recaptcha-badge" />
        </Box>
      </Box>
    </Wrapper>
  );
}

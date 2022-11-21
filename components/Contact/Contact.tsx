/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { FunctionComponent, PropsWithChildren } from "react";

import { EmailData } from "@/utils/email";
// TODO: recaptcha

export function Contact({
  Wrapper,
}: {
  Wrapper: FunctionComponent<PropsWithChildren<{}>>;
}) {
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
          <Group position="right" mt="md">
            <Button type="submit">Send message</Button>
          </Group>
        </form>
      </Box>
    </Wrapper>
  );
}

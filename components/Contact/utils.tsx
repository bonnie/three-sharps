import * as Sentry from "@sentry/nextjs";
import axios from "axios";

import { EmailData } from "@/utils/email";

const RECAPTCHA_SCORE_THRESHOLD = 0.6;

export const sendEmailRequest = async (values: EmailData): Promise<boolean> => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_ROOT_URL}/api/send-email`,
      {
        headers: { "Content-Type": "application/json" },
        data: values,
      },
    );
    return true;
  } catch (error: unknown) {
    const errorString =
      error instanceof Error ? error.toString() : "unknown error";

    Sentry.captureException("FAILURE: Could not submit mail form via API", {
      tags: { ...values, error: errorString },
    });
    return false;
  }
};

export const sendTokenValidationRequest = async (
  token: string,
  values: EmailData,
) => {
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
    return false;
  }

  const recaptchaVerified = response.data.score >= RECAPTCHA_SCORE_THRESHOLD;

  if (!recaptchaVerified) {
    Sentry.captureException(
      `RECAPTCHA VERIFICATION FAILED with score ${response.data.score}`,
      { tags: values },
    );
  }

  return recaptchaVerified;
};

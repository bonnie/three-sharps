import * as Sentry from "@sentry/nextjs";
import axios from "axios";

const RECAPTCHA_VERIFICATION_URL =
  "https://www.google.com/recaptcha/api/siteverify";

export const verifyRecaptcha = async (token: string) => {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    Sentry.captureException(
      "Unable to verify recaptcha; RECAPTCHA_SECRET_KEY not found in env vars",
    );
    return {};
  }

  const url = `${RECAPTCHA_VERIFICATION_URL}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

  const response = await axios.post(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  });

  if (!response.data.success) {
    Sentry.captureException(
      "RECAPTCHA VERIFICATION FAILED",
      response.data.error_codes,
    );
  }

  return response.data;
};

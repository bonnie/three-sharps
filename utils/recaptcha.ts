import axios from "axios";

const RECAPTCHA_VERIFICATION_URL =
  "https://www.google.com/recaptcha/api/siteverify";

export const verifyRecaptcha = async (token: string) => {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    // TODO Sentry
    console.error("no secret key");
  }

  const url = `${RECAPTCHA_VERIFICATION_URL}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

  const response = await axios.post(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  });

  if (!response.data.success) {
    // TODO: sentry
    console.error("RECAPTCHA FAILED", response.data.error_codes);
  }

  return response.data;
};

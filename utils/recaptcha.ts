import axios from "axios";

const RECAPTCHA_VERIFICATION_URL =
  "https://www.google.com/recaptcha/api/siteverify";

export const verifyRecaptcha = async (token: string) => {
  console.log("recaptcha secret key", process.env.RECAPTCHA_SECRET_KEY);
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error("no secret key");
  }

  const url = `${RECAPTCHA_VERIFICATION_URL}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

  const response = await axios.post(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  });

  console.log("RESPONSE", response.data);
  return response.data;
};

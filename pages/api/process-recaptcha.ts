import { NextApiRequest, NextApiResponse } from "next";

import { verifyRecaptcha } from "@/utils/recaptcha";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { token } = req.body.data;
    const recaptchaResponse = await verifyRecaptcha(token);
    return res.status(200).json(recaptchaResponse);
  }
  return res.status(404).json({
    // TODO: add error handling with Sentry
    error: {
      code: "not_found",
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

import { NextApiRequest, NextApiResponse } from "next";

import { EmailData, sendEmail } from "@/utils/email";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, fromEmail, subject, body }: EmailData = req.body;
    await sendEmail({ name, fromEmail, subject, body });
    return res.status(200).end();
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

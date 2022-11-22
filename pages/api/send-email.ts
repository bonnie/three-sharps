import { NextApiRequest, NextApiResponse } from "next";

import { EmailData, sendEmail } from "@/utils/email";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { originatorName, originatorEmail, subject, body }: EmailData =
      req.body.data;
    await sendEmail({ originatorName, originatorEmail, subject, body });
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: "not_found",
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

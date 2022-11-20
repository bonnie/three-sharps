// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from "@sendgrid/mail";

export type EmailData = {
  name: string;
  fromEmail: string;
  subject: string;
  body: string;
};

export const sendEmail = async ({
  name,
  fromEmail,
  subject,
  body,
}: EmailData) => {
  if (!process.env.SENDGRID_API_KEY) {
    // TODO: Sentry
    return;
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.EMAIL_RECIPIENT,
    from: { email: fromEmail, name },
    subject: `Three Sharps Website Inquiry: ${subject}`,
    text: body,
  };

  await sgMail
    .send(msg)
    .then(() => {
      // TODO: Sentry
    })
    .catch((error: unknown) => {
      // TODO: sentry
      console.error(error);
    });
};

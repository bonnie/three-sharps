// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from "@sendgrid/mail";
import * as Sentry from "@sentry/nextjs";

const THANK_YOU_MESSAGE =
  "Thank you for contacting Three Sharps JavaScript consulting! A human will get back to you as soon as possible.";

export type EmailData = {
  originatorName: string;
  originatorEmail: string;
  subject: string;
  body: string;
};

export const sendEmail = async ({
  originatorName,
  originatorEmail,
  subject,
  body,
}: EmailData) => {
  if (!process.env.SENDGRID_API_KEY) {
    Sentry.captureException(
      "Could not find environment variable SENDGRID_API_KEY. Cannot send email from form",
    );
    // eslint-disable-next-line no-console
    console.error("NO SENDGRID KEY env var");
    return;
  }

  if (!process.env.THREE_SHARPS_EMAIL) {
    Sentry.captureException(
      "Could not find environment variable THREE_SHARPS_EMAIL. Cannot send email from form",
    );
    // eslint-disable-next-line no-console
    console.error("NO THREE_SHARPS_EMAIL env var");
    return;
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const GREETING = `Hello, ${originatorName},`;

  const emailText = `${GREETING}\n${THANK_YOU_MESSAGE}\n----\n${body}`;
  const emailHtml = `<p>${GREETING}</p><p>${THANK_YOU_MESSAGE}</p><hr /><p>${body.replace(
    "\n",
    "</p><p>",
  )}</p>`;

  const msg = {
    to: originatorEmail,
    bcc: [
      process.env.THREE_SHARPS_EMAIL,
      process.env.SECONDARY_EMAIL_RECIPIENT,
    ],
    from: {
      email: process.env.THREE_SHARPS_EMAIL,
      name: "Three Sharps JavaScript Consulting",
    },
    subject: `Three Sharps Website Inquiry: ${subject}`,
    text: emailText,
    html: emailHtml,
  };

  await sgMail
    // @ts-ignore because the type for msg doesn't include an array for bcc, only string
    .send(msg)
    .then(() => {
      Sentry.captureMessage(`message sent from ${originatorEmail}`, "info");
    })
    .catch((error: sgMail.ResponseError) => {
      // @ts-ignore because sgMail.response error types `body` as a string
      const sendgridErrors = error?.response?.body?.errors;

      Sentry.captureException(`EMAIL FAILED
      Sendgrid errors: ${sendgridErrors}
      -----
      originatorName: ${originatorName}
      originatorEmail: ${originatorEmail}
      subject: ${subject}
      body: ${body}
      -----
      error details: ${error}`);
    });
};

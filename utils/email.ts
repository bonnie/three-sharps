// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from "@sendgrid/mail";

const THANK_YOU_MESSAGE =
  "Thank you for contacting Three Sharps JavaScript consulting! We will get back to you regarding the matter below as soon as we can.";

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
    // TODO: Sentry
    console.error("NO SENDGRID KEY");
    return;
  }

  if (!process.env.THREE_SHARPS_EMAIL) {
    // TODO: Sentry
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
      console.log("yay, it worked!");
      // TODO: Sentry
    })
    .catch((error: sgMail.ResponseError) => {
      // TODO: sentry
      console.error(error);
      // @ts-ignore because sgMail.response error types `body` as a string
      console.error(error?.response?.body?.errors);
    });
};

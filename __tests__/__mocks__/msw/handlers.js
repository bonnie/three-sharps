import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_SERVER_ROOT_URL}/api/process-recaptcha`,
    (req, res, ctx) => res(ctx.json({ score: 0.9 })),
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_SERVER_ROOT_URL}/api/send-email`,
    () => {},
  ),
];

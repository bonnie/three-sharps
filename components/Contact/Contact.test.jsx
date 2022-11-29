import userEvent from "@testing-library/user-event";

import { render, screen, waitFor } from "@/__tests__/test-utils";
import { useNavSection } from "@/components/Navbar/hooks/useNavSection";

// import {
//   sendEmailRequest,
//   sendTokenValidationRequest,
// } from "./__mocks__/utils";
import { Contact } from "./Contact";

jest.mock("react-google-recaptcha-v3", () => {
  const originalModule = jest.requireActual("react-google-recaptcha-v3");

  return {
    __esModule: true, // Use it when dealing with esModules
    ...originalModule,
    useGoogleReCaptcha: () => ({ executeRecaptcha: jest.fn() }),
  };
});
// jest.mock("./utils");

// const REQUIRED_FIELD_LABELS = [/Name/, /Email/, /What can I help with/];
// const FIELD_LABELS = [...REQUIRED_FIELD_LABELS, /More details/];

test.only("Error display and no submit for invalid email", async () => {
  // sendEmailRequest.mockClear();

  const { Section } = useNavSection("Contact");
  render(<Contact Wrapper={Section} />);

  const user = userEvent.setup();
  const submitButton = screen.getByRole("button", { name: "Send message" });

  // make sure email error doesn't show by default
  const notEmailError = screen.queryByText("Invalid email");
  expect(notEmailError).not.toBeInTheDocument();

  // check for lack of submission when not all fields are filled out
  await user.type(screen.getByLabelText(/name/i), "Three Sharps");
  await user.type(screen.getByLabelText(/help/i), "halp!!");
  await user.click(submitButton);
  expect(screen.queryByText(/message sent/)).not.toBeInTheDocument();

  // all required fields are filled now; should reveal email error
  const emailInput = screen.getByLabelText(/Email/);
  await user.type(emailInput, "not legit");
  await user.click(submitButton);
  const emailError = screen.queryByText("Invalid email");
  expect(emailError).toBeInTheDocument();
  expect(screen.queryByText(/message sent/)).not.toBeInTheDocument();

  // fill out email legitimately; error should clear
  await user.clear(emailInput);
  await user.type(emailInput, "legit@email.com");
  await user.click(submitButton);
  expect(emailError).not.toBeInTheDocument();

  // form should have submitted successfully
  const successToast = await screen.findByText(/message sent/);
  expect(successToast).toBeInTheDocument();
});

// test("Recaptcha error and no submit if recaptcha fails", async () => {
//   sendEmailRequest.mockClear();

//   jest.mock("./utils", () => ({
//     sendEmailRequest,
//     sendTokenValidationRequest: () => {
//       console.log("VALID00TING TOKEN");
//       return false;
//     },
//   }));
//   // fail the recaptcha

//   const { Section } = useNavSection("Contact");
//   render(<Contact Wrapper={Section} />);

//   const user = userEvent.setup();
//   const submitButton = screen.getByRole("button", { name: "Send message" });

//   // make sure recaptcha error doesn't show by default
//   const recaptchaError = screen.queryByText(/Recaptcha failed/i);
//   expect(recaptchaError).not.toBeVisible();

//   // fill out form
//   const nameInput = screen.getByLabelText(/name/i);
//   await user.type(nameInput, "Three Sharps");
//   const emailInput = screen.getByLabelText(/email/i);
//   await user.type(emailInput, "three@sharps.com");
//   const subjectInput = screen.getByLabelText(/help/i);
//   await user.type(subjectInput, "halp!!");

//   // all required fields are filled now; should reveal email error,
//   // after async actions have occurred
//   await user.click(submitButton);
//   await waitFor(() => expect(recaptchaError).toBeVisible());

//   // form should not have been submitted via API
//   // this is async so the assertion needs to give it time before determining it hasn't happened
//   await waitFor(() => {
//     expect(sendEmailRequest).not.toHaveBeenCalled();
//   });
// });

// test("Contact component renders without error and includes links to personal page", () => {
//   const { Section } = useNavSection("Contact");

//   render(<Contact Wrapper={Section} />);
// });

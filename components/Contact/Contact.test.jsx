import userEvent from "@testing-library/user-event";

import { render, screen } from "@/__tests__/test-utils";
import { useNavSection } from "@/components/Navbar/hooks/useNavSection";

import { Contact } from "./Contact";

test("Error display and no submit for invalid email", async () => {
  const { Section } = useNavSection("Contact");
  render(<Contact Wrapper={Section} />);

  const user = userEvent.setup();
  const submitButton = screen.getByRole("button", { name: "Send message" });

  // check for lack of submission when not all fields are filled out
  const fieldLabels = [/Name/, /Email/, /What can I help with/, /More details/];
  fieldLabels.forEach(async (fieldLabel) => {
    const input = screen.getByLabelText(fieldLabel);
    submitButton.click();

    // fill out the field
    user.type(input, "type something");
  });

  // all fields are filled now; should not find error
  submitButton.click();
  const warning = screen.queryByText("Please fill out this field.");
  expect(warning).not.toBeInTheDocument();
});

test("Contact component renders without error and includes links to personal page", () => {
  const { Section } = useNavSection("Contact");

  render(<Contact Wrapper={Section} />);
});

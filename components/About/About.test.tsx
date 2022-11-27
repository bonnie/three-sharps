import { render, screen } from "@/__tests__/test-utils";
import { useNavSection } from "@/components/Navbar/hooks/useNavSection";

import { About } from "./About";

test("About component renders without error and includes links to personal page", () => {
  const { Section } = useNavSection("About");

  render(<About Wrapper={Section} />);

  const personalLink = screen.getByRole("link", { name: "Bonnie Schulkin" });
  expect(personalLink).toHaveAttribute("href", "https://bonnie.dev");

  const coursesLink = screen.getByRole("link", { name: "online courses" });
  expect(coursesLink).toHaveAttribute("href", "https://bonnie.dev/courses");
});

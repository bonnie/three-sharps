// adapted from https://github.com/mantinedev/mantine-next-template/blob/master/components/Welcome/Welcome.test.tsx
import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome";

describe("Welcome component", () => {
  it("has correct Next.js theming section link", () => {
    render(<Welcome />);
    expect(screen.getByText("this guide")).toHaveAttribute(
      "href",
      "https://mantine.dev/guides/next/"
    );
  });
});

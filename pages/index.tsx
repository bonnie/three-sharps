import { AppShell, Box, useMantineTheme } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { IconArrowUpCircle } from "@tabler/icons";

import { About } from "@/components/About/About";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { Contact } from "@/components/Contact/Contact";
import { ThreeSharpsNavbar } from "@/components/Navbar/Navbar";
import { Welcome } from "@/components/Welcome/Welcome";

export default function HomePage() {
  const theme = useMantineTheme();
  const { navHeight } = theme.other;

  const { scrollIntoView: aboutScrollIntoView, targetRef: aboutTargetRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: contactScrollIntoView, targetRef: contactTargetRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: welcomeScrollIntoView, targetRef: welcomeTargetRef } =
    useScrollIntoView<HTMLDivElement>();

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <ThreeSharpsNavbar
          scrolls={{
            aboutScrollIntoView,
            contactScrollIntoView,
            welcomeScrollIntoView,
          }}
        />
      }
    >
      <Box mt={navHeight}>
        <Welcome ref={welcomeTargetRef} />
        <About ref={aboutTargetRef} />
        <Contact ref={contactTargetRef} />
        <ColorSchemeToggle />
      </Box>
    </AppShell>
  );
}

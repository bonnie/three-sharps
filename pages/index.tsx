import { AppShell, Box, useMantineTheme } from "@mantine/core";

import { About } from "@/components/About/About";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { Contact } from "@/components/Contact/Contact";
import { ThreeSharpsNavbar } from "@/components/Navbar/Navbar";
import { Welcome } from "@/components/Welcome/Welcome";

export default function HomePage() {
  const theme = useMantineTheme();
  const { navHeight } = theme.other;

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<ThreeSharpsNavbar />}
    >
      <Box mt={navHeight}>
        <Welcome />
        <About />
        <Contact />
        <ColorSchemeToggle />
      </Box>
    </AppShell>
  );
}

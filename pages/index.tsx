import { AppShell, Box, useMantineTheme } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { IconArrowUpCircle } from "@tabler/icons";

import { About } from "@/components/About/About";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { Contact } from "@/components/Contact/Contact";
import { useNavSection } from "@/components/Navbar/hooks/useNavSection";
import { ThreeSharpsNavbar } from "@/components/Navbar/Navbar";
import { Welcome } from "@/components/Welcome/Welcome";

const welcomeNavTitle = "";
const aboutNavTitle = "About";
const contactNavTitle = "Contact";

export default function HomePage() {
  const theme = useMantineTheme();
  const { navHeight } = theme.other;

  const welcomeNavData = useNavSection(welcomeNavTitle);
  const aboutNavData = useNavSection(aboutNavTitle);
  const contactNavData = useNavSection(contactNavTitle);

  const navData = {
    welcome: {
      title: welcomeNavTitle,
      icon: null,
      scrollIntoView: welcomeNavData.scrollIntoView,
    },
    about: {
      title: aboutNavTitle,
      icon: null,
      scrollIntoView: aboutNavData.scrollIntoView,
    },
    contact: {
      title: contactNavTitle,
      icon: null,
      scrollIntoView: contactNavData.scrollIntoView,
    },
  };

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<ThreeSharpsNavbar navData={navData} />}
    >
      <Box mt={navHeight}>
        <Welcome Wrapper={welcomeNavData.Section} />
        <About Wrapper={aboutNavData.Section} />
        <Contact Wrapper={contactNavData.Section} />
        <ColorSchemeToggle />
      </Box>
    </AppShell>
  );
}

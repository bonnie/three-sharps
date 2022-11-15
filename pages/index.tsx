import { AppShell, Box, useMantineTheme } from "@mantine/core";
import { IconArrowUpCircle, IconLego, IconMail } from "@tabler/icons";

import { About } from "@/components/About/About";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { Contact } from "@/components/Contact/Contact";
import { useNavSection } from "@/components/Navbar/hooks/useNavSection";
import { ThreeSharpsNavbar } from "@/components/Navbar/Navbar";
import { Welcome } from "@/components/Welcome/Welcome";

const aboutNavTitle = "About";
const contactNavTitle = "Contact";

export default function HomePage() {
  const theme = useMantineTheme();
  const { navHeight } = theme.other;

  const aboutNavData = useNavSection(aboutNavTitle);
  const contactNavData = useNavSection(contactNavTitle);

  const navData = {
    about: {
      title: aboutNavTitle,
      icon: IconLego,
      scrollIntoView: aboutNavData.scrollIntoView,
    },
    contact: {
      title: contactNavTitle,
      icon: IconMail,
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
        <Welcome />
        <About Wrapper={aboutNavData.Section} />
        <Contact Wrapper={contactNavData.Section} />
        <ColorSchemeToggle />
      </Box>
    </AppShell>
  );
}

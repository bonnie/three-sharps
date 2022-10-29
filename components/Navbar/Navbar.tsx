// adapted from https://codesandbox.io/s/intelligent-babycat-mlwm0?file=/src/App.tsx:0-1518

import {
  Center,
  Group,
  Header,
  Image,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
} from "@tabler/icons";
import { useState } from "react";

import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";

import { NavbarLink } from "./NavbarLink";

const navData = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

// the name "Navbar" is already used as a Mantine component
export function ThreeSharpsNavbar() {
  const theme = useMantineTheme();
  const { navHeight } = theme.other;

  const [active, setActive] = useState(0);

  const links = navData.map((link, index) => (
    <NavbarLink
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Header fixed height={navHeight}>
        <Group styles={{ width: "100%" }}>
          <Center>
            <Image
              sx={{ height: navHeight }}
              p={5}
              src="/logo/sharps.svg"
              alt="Three musical sharp signs in the configuration for A major"
            />
          </Center>
          <Group position="left" spacing={2}>
            {links}
          </Group>
          <ColorSchemeToggle />
        </Group>
      </Header>
    </MediaQuery>
  );
}

// import { useState } from "react";
// import {
//   createStyles,
//   MantineProvider,
//   AppShell,
//   Header,
//   Navbar,
//   Burger,
//   MediaQuery,
//   Anchor
// } from "@mantine/core";

// export default function App() {
//   const { classes } = useStyles();
//   const [opened, setOpened] = useState(false);
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <AppShell
//         fixed
//         navbarOffsetBreakpoint="sm"
//         header={
//           <Header height={50}>
//             <MediaQuery largerThan="sm" styles={{ display: "none" }}>
//               <Burger
//                 opened={opened}
//                 onClick={() => setOpened((o) => !o)}
//                 size="sm"
//                 mr="xl"
//               />
//             </MediaQuery>
//             <div className={classes.links}>
//               <Anchor>Home</Anchor>
//               <Anchor>Features</Anchor>
//               <Anchor>Pricing</Anchor>
//             </div>
//           </Header>
//         }
//         navbar={
//           <Navbar
//             className={classes.navbar}
//             width={{ base: "100%", sm: 0 }}
//             hidden={!opened}
//           >
//             <Anchor>Home</Anchor>
//             <Anchor>Features</Anchor>
//             <Anchor>Pricing</Anchor>
//           </Navbar>
//         }
//       >
//         App
//       </AppShell>
//     </MantineProvider>
//   );
// }

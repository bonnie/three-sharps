// adapted from https://codesandbox.io/s/intelligent-babycat-mlwm0?file=/src/App.tsx:0-1518

import {
  Box,
  Center,
  Divider,
  Group,
  Header,
  Image,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { IconLego, IconSend } from "@tabler/icons";
import { useState } from "react";

import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";

import { NavbarLink } from "./NavbarLink";
import { ScrollIntoView } from "./types";

// the name "Navbar" is already used as a Mantine component
export function ThreeSharpsNavbar({
  scrolls,
}: {
  scrolls: {
    aboutScrollIntoView: ScrollIntoView;
    contactScrollIntoView: ScrollIntoView;
    welcomeScrollIntoView: ScrollIntoView;
  };
}) {
  const theme = useMantineTheme();
  const { navHeight } = theme.other;

  const navData = [
    {
      icon: IconLego,
      label: "About",
      scrollIntoView: scrolls.aboutScrollIntoView,
    },
    {
      icon: IconSend,
      label: "Contact",
      scrollIntoView: scrolls.contactScrollIntoView,
    },
  ];

  const [active, setActive] = useState(navData.length); // start without active link

  const links = navData.map((link, index) => (
    <NavbarLink
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...link}
      key={link.label}
      active={index === active}
      setActive={() => setActive(index)}
      scrollIntoView={link.scrollIntoView}
    />
  ));

  return (
    <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
      <Header fixed height={navHeight}>
        <Group position="apart" styles={{ width: "100%" }}>
          <Group>
            <Center mr={20}>
              <Image
                width={navHeight}
                p={5}
                src="/logo/sharps.svg"
                alt="Three musical sharp signs in the configuration for A major"
              />
            </Center>
            <Divider orientation="vertical" />
            {links}
          </Group>
          <Box mr={5}>
            <ColorSchemeToggle />
          </Box>
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

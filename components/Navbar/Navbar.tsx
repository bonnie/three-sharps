// adapted from https://codesandbox.io/s/intelligent-babycat-mlwm0?file=/src/App.tsx:0-1518

import {
  Center,
  Divider,
  Group,
  Header,
  Image,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { useState } from "react";

import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";

import { useReturnToTop } from "./hooks/useReturnToTop";
import { NavbarLink } from "./NavbarLink";
import { ScrollIntoView } from "./types";

// the name "Navbar" is already used as a Mantine component
export function ThreeSharpsNavbar({
  navData,
}: {
  navData: Record<
    string,
    {
      title: string;
      scrollIntoView: ScrollIntoView;
      icon: TablerIcon | null;
    }
  >;
}) {
  const theme = useMantineTheme();
  const { navHeight } = theme.other;
  const [active, setActive] = useState(Object.keys(navData).length); // start without active link
  const returnToTop = useReturnToTop();

  const links = Object.keys(navData).map((navKey, index) => {
    const link = navData[navKey];
    return (
      <NavbarLink
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...link}
        label={link.title}
        key={navKey}
        active={index === active}
        setActive={() => setActive(index)}
        scrollIntoView={link.scrollIntoView}
      />
    );
  });

  return (
    <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
      <Header fixed height={navHeight} mx="10px">
        <Group position="apart" styles={{ width: "100%" }}>
          <Group>
            <Center mr={20}>
              <Image
                width={navHeight}
                p={5}
                src="/logo/sharps.svg"
                alt="Three musical sharp signs in the configuration for A major"
                onClick={returnToTop}
              />
            </Center>
            <Divider orientation="vertical" />
            {links}
          </Group>
          <ColorSchemeToggle />
        </Group>
      </Header>
    </MediaQuery>
  );
}

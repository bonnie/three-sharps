import { Image, Transition, useMantineColorScheme } from "@mantine/core";
import { useReducedMotion } from "@mantine/hooks";
import { useEffect, useState } from "react";

import { strings } from "@/constants/strings";

export function AnimatedLogo() {
  const [opened, setOpened] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const reduceMotion = useReducedMotion();

  const customScale = {
    in: { transform: "scale(1)" },
    out: { transform: "scale(0.9)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform",
  };

  // mark transition as "done" on component mount
  useEffect(() => setOpened(true), []);

  const logoSrc = `/logo/three-sharps-${colorScheme}.svg`;

  return (
    <div
      style={{
        width: 500,
        height: 320,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Transition
        mounted={opened}
        transition={customScale}
        duration={reduceMotion ? 0 : 700}
        timingFunction="easeOutBack"
      >
        {(styles) => (
          <Image style={styles} src={logoSrc} alt={strings.logoAlt} />
        )}
      </Transition>
    </div>
  );
}

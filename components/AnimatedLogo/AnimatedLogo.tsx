import { strings } from "@/constants/strings";
import { Image, Transition } from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";

export const AnimatedLogo = () => {
  const [opened, setOpened] = useState(false);

  const customScale = {
    in: { transform: "scale(1)" },
    out: { transform: "scale(0.9)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  };

  useEffect(() => setOpened(true), []);

  return (
    <div style={{ width: 500, marginLeft: "auto", marginRight: "auto" }}>
      <Transition
        mounted={opened}
        transition={customScale}
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Image
            style={styles}
            src="/logo/three-sharps-light.svg"
            alt={strings.logoAlt}
          />
        )}
      </Transition>
    </div>
  );
};

import { Box, useMantineTheme } from "@mantine/core";
import { FunctionComponent, PropsWithChildren } from "react";

import { useStyles } from "@/components/Section/Section.styles";
import { SectionTitle } from "@/components/Section/SectionTitle";

// eslint-disable-next-line no-unused-vars
export const useNavSection: (title: string) => {
  Section: FunctionComponent<PropsWithChildren<{}>>;
} = (title) => {
  function Section({ children }: PropsWithChildren<{}>) {
    const theme = useMantineTheme();
    const { navHeight } = theme.other;
    const { classes } = useStyles();

    return (
      <>
        <Box sx={{ height: navHeight }} id={title} />
        <section className={classes.contentSection}>
          {title ? <SectionTitle title={title} /> : null}
          {children}
        </section>
      </>
    );
  }

  return {
    Section,
  };
};

import { useScrollIntoView } from "@mantine/hooks";
import { FunctionComponent, PropsWithChildren } from "react";

import { useStyles } from "@/components/Section/Section.styles";
import { SectionTitle } from "@/components/Section/SectionTitle";

import { ScrollIntoView } from "../types";

// eslint-disable-next-line no-unused-vars
export const useNavSection: (title: string) => {
  scrollIntoView: ScrollIntoView;
  Section: FunctionComponent<PropsWithChildren<{}>>;
} = (title) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration: 0,
    offset: -20,
  });

  // TODO: title scrolls out of view / new title scrolls to middle of screen,
  // then select new section in nav
  function Section({ children }: PropsWithChildren<{}>) {
    const { classes } = useStyles();

    return (
      <section className={classes.contentSection} ref={targetRef}>
        {title ? <SectionTitle title={title} /> : null}
        {children}
      </section>
    );
  }

  return {
    scrollIntoView,
    Section,
  };
};

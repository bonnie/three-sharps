import { useScrollIntoView } from "@mantine/hooks";
import { FunctionComponent, PropsWithChildren } from "react";

import { useStyles } from "@/components/Section/Section.styles";
import { SectionTitle } from "@/components/Section/SectionTitle";

import { ScrollIntoView } from "../types";

export const useNavSection: (title: string) => {
  scrollIntoView: ScrollIntoView;
  Section: FunctionComponent<PropsWithChildren<{}>>;
} = (title) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration: 0,
    offset: -20,
  });

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

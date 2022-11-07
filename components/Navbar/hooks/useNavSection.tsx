import { useIntersection, useScrollIntoView } from "@mantine/hooks";
import { FunctionComponent, PropsWithChildren } from "react";

import { AnimatedTitle } from "@/components/Section/AnimatedTitle";
import { useStyles } from "@/components/Section/Section.styles";

import { ScrollIntoView } from "../types";

export const useNavSection: (title: string) => {
  scrollIntoView: ScrollIntoView;
  Section: FunctionComponent<PropsWithChildren<{}>>;
} = (title) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();

  function Section({ children }: PropsWithChildren<{}>) {
    const { classes } = useStyles();

    const { ref: intersectionRef, entry } = useIntersection({
      root: targetRef.current,
      threshold: 1,
    });

    return (
      <section className={classes.contentSection} ref={targetRef}>
        {children}
        {title ? <AnimatedTitle title={title} entry={entry} /> : null}
      </section>
    );
  }

  return {
    scrollIntoView: () => {
      scrollIntoView();
    },
    Section,
  };
};

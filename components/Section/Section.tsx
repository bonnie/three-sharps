import { MutableRefObject, PropsWithChildren } from "react";

import { useStyles } from "./Section.styles";
import { SectionTitle } from "./SectionTitle";

export function Section({
  children,
  title,
  rootRef,
}: // eslint-disable-next-line react/require-default-props
PropsWithChildren<{
  title: string | null;
  rootRef: MutableRefObject<HTMLDivElement>;
}>) {
  const { classes } = useStyles();

  return (
    <section className={classes.contentSection} ref={rootRef}>
      {children}
      {title ? <SectionTitle title={title} /> : null}
    </section>
  );
}

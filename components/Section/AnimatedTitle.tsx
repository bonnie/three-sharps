// inspired by https://tympanus.net/Development/ScrollingLettersAnimation/index3.html
// code adapted from https://dev.to/chaituknag/animate-on-scroll-in-react-35e5

import { Title } from "@mantine/core";
import { useReducedMotion } from "@mantine/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { useStyles } from "./AnimatedTitle.styles";

export function AnimatedTitle({
  title,
  entry,
}: {
  title: string;
  entry: IntersectionObserverEntry;
}) {
  const { classes } = useStyles();

  const reduceMotion = useReducedMotion();

  const controls = useAnimation();
  useEffect(() => {
    if (entry?.isIntersecting) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: reduceMotion ? 0 : 0.5,
          ease: "easeOut",
        },
      });
    }
  }, [entry, controls, reduceMotion]);

  return (
    <motion.div
      className={`${classes.titleText} ${classes.titleBorder}`}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      <Title>{title}</Title>
    </motion.div>
  );
}

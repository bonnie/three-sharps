import { useReducedMotion, useWindowScroll } from "@mantine/hooks";

export function useReturnToTop() {
  const reducedMotion = useReducedMotion();
  const [, scrollTo] = useWindowScroll();
  return () => {
    if (reducedMotion) {
      // TODO: don't animate
    } else {
      scrollTo({ x: 0, y: 0 });
    }
  };
}

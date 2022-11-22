import { useReducedMotion, useWindowScroll } from "@mantine/hooks";

export function useReturnToTop() {
  const reducedMotion = useReducedMotion();
  const [, scrollTo] = useWindowScroll();
  return () => {
    if (reducedMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else {
      scrollTo({ x: 0, y: 0 });
    }
  };
}

import { useWindowScroll } from "@mantine/hooks";

export function useReturnToTop() {
  const [, scrollTo] = useWindowScroll();
  return () => scrollTo({ x: 0, y: 0 });
}

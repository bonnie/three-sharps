interface ScrollIntoViewAnimation {
  /** target element alignment relatively to parent based on current axis */
  alignment?: "start" | "end" | "center";
}
export type ScrollIntoView = ({ alignment }: ScrollIntoViewAnimation) => void;

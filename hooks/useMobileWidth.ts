import { useMediaQuery } from "@mantine/hooks";

export const useMobileWidth = () => useMediaQuery("(max-width: 500px)");

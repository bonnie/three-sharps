import { Anchor, Center, Image, Paper } from "@mantine/core";

import { useMobileWidth } from "@/hooks/useMobileWidth";

ExpertiseCard.defaultProps = {
  imgAlt: "",
  imgWidth: "2em",
};

export function ExpertiseCard({
  title,
  link,
  imgSrc,
  imgAlt,
  imgWidth,
}: {
  title: string;
  link: string;
  imgSrc: string | null;
  imgAlt?: string;
  imgWidth?: string;
}) {
  const mobileWidth = useMobileWidth();

  return (
    <Paper shadow="sm" radius="md" p="md">
      <Anchor size={mobileWidth ? "md" : "xl"} href={link} target="_blank">
        <Center>
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={imgAlt ?? title}
              sx={{ maxWidth: imgWidth }}
              mr={10}
            />
          ) : null}
          {title || null}
        </Center>
      </Anchor>
    </Paper>
  );
}

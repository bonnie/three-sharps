import { Anchor, Box, Image, Paper } from "@mantine/core";

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
  return (
    <Paper shadow="xs" radius="md" p="md">
      <Anchor size="xl" href={link} target="_blank">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={imgAlt ?? title}
              sx={{ maxWidth: imgWidth }}
              mr={10}
            />
          ) : null}
          {title}
        </Box>
      </Anchor>
    </Paper>
  );
}

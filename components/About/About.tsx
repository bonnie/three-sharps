import { Anchor, SimpleGrid, Text, useMantineColorScheme } from "@mantine/core";
import {
  IconCalendar,
  IconCircleCheck,
  IconUser,
  IconUsers,
} from "@tabler/icons";
import { FunctionComponent, PropsWithChildren } from "react";

import { useStyles } from "./About.styles";
import { ExpertiseCard } from "./ExpertiseCard";
import { OfferingCard } from "./OfferingCard";

export function About({
  Wrapper,
}: {
  Wrapper: FunctionComponent<PropsWithChildren<{}>>;
}) {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  return (
    <Wrapper>
      <Text className={`${classes.aboutText} ${classes.majorText}`} size="xl">
        Three Sharps: JavaScript Consulting by{" "}
        <Anchor href="https://bonnie.dev" target="_blank">
          Bonnie Schulkin
        </Anchor>
        .
      </Text>
      <Text size="lg" mt="xl" className={classes.aboutText}>
        Bonnie&apos;s clear, easygoing and encouraging teaching style has earned
        her a reputation for quality and approachability.
      </Text>
      <Text size="lg" mt="xl" className={classes.aboutText}>
        In addition to consulting, she offers a number of popular{" "}
        <Anchor href="https://bonnie.dev/courses" target="_blank">
          online courses
        </Anchor>
        .
      </Text>
      <Text
        mt="xl"
        size="xl"
        className={`${classes.aboutText} ${classes.majorText}`}
      >
        Expertise
      </Text>
      <SimpleGrid cols={2} className={classes.aboutText}>
        <ExpertiseCard
          title="React"
          link="https://reactjs.org"
          imgSrc="/logos/react.svg"
        />
        <ExpertiseCard
          title="Next.js"
          link="https://nextjs.org/"
          imgSrc="/logos/next-button.svg"
        />
        <ExpertiseCard
          title="Testing Library"
          link="https://testing-library.com/"
          imgSrc="/logos/testing-library.png"
        />
        <ExpertiseCard
          title=""
          link="https://www.cypress.io/"
          imgSrc={`/logos/cypress-${colorScheme}.png`}
          imgAlt="Cypress"
          imgWidth="5em"
        />
      </SimpleGrid>

      <Text
        mt="xl"
        size="xl"
        className={`${classes.aboutText} ${classes.majorText}`}
      >
        Consulting Options
      </Text>
      <SimpleGrid cols={2} className={classes.aboutText}>
        <OfferingCard
          text="Individual instruction"
          Icon={IconUser}
          color="cyan"
        />
        <OfferingCard text="Corporate Training" Icon={IconUsers} color="cyan" />
        <OfferingCard
          text="One-time Consulting"
          Icon={IconCircleCheck}
          color="indigo"
        />
        <OfferingCard
          text="Ongoing engagement"
          Icon={IconCalendar}
          color="indigo"
        />
      </SimpleGrid>
    </Wrapper>
  );
}

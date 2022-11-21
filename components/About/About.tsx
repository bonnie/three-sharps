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
      <>
        <Text
          className={`${classes.aboutText} ${classes.majorText}`}
          size="xl"
          mt="xl"
        >
          Three Sharps JavaScript Consulting is{" "}
          <Anchor href="https://bonnie.dev">Bonnie Schulkin</Anchor>.
        </Text>
        <Text size="lg" mt="xl" className={classes.aboutText}>
          Bonnie&apos;s clear, easygoing and encouraging teaching style has
          earned her a reputation for quality and approachability.
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
            title="React Query"
            link="https://tanstack.com/query/v4"
            imgSrc={null}
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
          Choose from...
        </Text>
        <SimpleGrid cols={2} className={classes.aboutText}>
          <OfferingCard
            text="Individual instruction"
            Icon={IconUser}
            color="cyan"
          />
          <OfferingCard
            text="Corporate Training"
            Icon={IconUsers}
            color="cyan"
          />
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
      </>
    </Wrapper>
  );
}

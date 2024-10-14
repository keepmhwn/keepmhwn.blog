import {
  Stack,
  HStack,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { MY_DATA } from "@/data/about";
import { MY_PROJECT_LIST } from "@/data/projects";

import EmailButton from "@/components/social-button/email";
import GithubButton from "@/components/social-button/github";

import SkillsView from "./_components/skills-view";
import ProjectsView from "./_components/projects-view";

const AboutPage = () => {
  return (
    <Stack spacing="48px">
      <Stack spacing="8px">
        <Heading size="lg" color="gray.700">
          About Me
        </Heading>
        <UnorderedList spacing={2}>
          {MY_DATA.introduce.map((text, index) => (
            <ListItem key={index} fontWeight={500} color="gray.700">
              {text}
            </ListItem>
          ))}
        </UnorderedList>

        <HStack>
          <EmailButton email={MY_DATA.email} />
          <GithubButton github={MY_DATA.github} />
        </HStack>
      </Stack>
      <SkillsView skills={MY_DATA.skills} />
      <ProjectsView projects={MY_PROJECT_LIST} />
    </Stack>
  );
};

export default AboutPage;

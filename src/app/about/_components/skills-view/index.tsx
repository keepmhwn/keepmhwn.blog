import { Badge, Wrap, Stack, Heading } from "@chakra-ui/react";

type Props = {
  skills: string[];
};

const SkillsView = ({ skills }: Props) => {
  return (
    <Stack>
      <Heading size="lg">Skills</Heading>
      <Wrap>
        {skills.map((skill) => (
          <Badge
            key={skill}
            sx={{
              padding: "8px 12px",
              borderRadius: "8px",
              color: "#fff",
              backgroundColor: "#3182ce",
              textTransform: "capitalize",
            }}
          >
            {skill}
          </Badge>
        ))}
      </Wrap>
    </Stack>
  );
};

export default SkillsView;

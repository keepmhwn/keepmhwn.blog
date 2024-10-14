import type { Project } from "@/types/project";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  IconButton,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

type Props = {
  data: Project;
  onDetailClick: (project: Project) => void;
};

const ProjectCard = ({ data, onDetailClick }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Stack spacing={2}>
          <Heading size="md" color="gray.700">
            {data.title}
          </Heading>
          <Text color="gray.500">{data.releaseDate}</Text>
        </Stack>
      </CardHeader>
      <CardBody paddingY="0px">
        <Text noOfLines={3}>{data.description}</Text>
      </CardBody>
      <CardFooter justifyContent="flex-end">
        <IconButton
          aria-label="detail project view"
          colorScheme="blue"
          icon={<ArrowForwardIcon />}
          onClick={() => onDetailClick(data)}
        />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

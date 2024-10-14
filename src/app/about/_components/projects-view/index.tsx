"use client";
import type { Project } from "@/types/project";
import { useState } from "react";

import { Stack, Heading, Grid, GridItem } from "@chakra-ui/react";

import ProjectCard from "./project-card";
import ProjectModal from "./project-modal";

type Props = {
  projects: Array<Project>;
};

const ProjectsView = ({ projects }: Props) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleDetailClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <Stack>
      <Heading size="lg">Solved</Heading>
      <Grid
        gap={6}
        sx={{
          "@media (max-width: 500px)": {
            gridTemplateColumns: "1fr",
          },
          "@media (min-width: 501px)": {
            gridTemplateColumns: "1fr 1fr",
          },
        }}
      >
        {projects.map((project) => (
          <GridItem key={project.link}>
            <ProjectCard data={project} onDetailClick={handleDetailClick} />
          </GridItem>
        ))}
      </Grid>
      {selectedProject && (
        <ProjectModal
          isOpen
          data={selectedProject}
          onClose={handleModalClose}
        />
      )}
    </Stack>
  );
};

export default ProjectsView;

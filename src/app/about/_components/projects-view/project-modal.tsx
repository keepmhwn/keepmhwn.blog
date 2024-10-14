import Link from "next/link";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
} from "@chakra-ui/react";

import { LinkIcon } from "@chakra-ui/icons";

import type { Project } from "@/types/project";

type Props = {
  isOpen: boolean;
  data: Project;
  onClose: () => void;
};

const ProjectModal = ({ isOpen, data, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{data.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingY="16px">
          <Stack spacing="16px">
            <Text>{data.releaseDate}</Text>
            <Text>{data.description}</Text>
            <Stack alignItems={"flex-end"}>
              <Link href={data.link} target="_blank">
                <Button
                  variant="link"
                  colorScheme="blue"
                  leftIcon={<LinkIcon />}
                >
                  Visit the Site
                </Button>
              </Link>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

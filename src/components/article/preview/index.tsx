import type { MarkdownMetadata } from "@/types/blog";

import Link from "next/link";
import Image from "next/image";
import { Box, Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

import dayjs from "dayjs";

type Props = {
  metadata: MarkdownMetadata;
};

const PreviewArticleCard = ({ metadata }: Props) => {
  return (
    <Link href={`/blog/${metadata.title}`}>
      <Card
        overflow="hidden"
        variant="elevated"
        direction={{ base: "column", sm: "row" }}
        maxH={{ base: "350px", sm: "180px" }}
      >
        <Box
          width={{ base: "100%", sm: "150px", md: "200px" }}
          height="180px"
          sx={{ position: "relative" }}
        >
          <Image
            fill
            objectFit="cover"
            quality={30}
            src={metadata.thumbnail}
            alt={`${metadata.title} thumbnail`}
          />
        </Box>
        <CardBody
          bgColor="white"
          _hover={{
            bgColor: "gray.50",
          }}
        >
          <Stack>
            <Heading color="gray.800" size="md" noOfLines={1}>
              {metadata.title}
            </Heading>
            <Text color="gray.500">
              {dayjs(metadata.date).format("YYYY-MM-DD")}
            </Text>
            <Text color="gray.700" noOfLines={3}>
              {metadata.intro}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PreviewArticleCard;

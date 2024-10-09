import type { MarkdownMetadata } from "@/types/blog";

import Link from "next/link";
import { Card, CardBody, Stack, Heading, Text, Image } from "@chakra-ui/react";

import dayjs from "dayjs";

type Props = {
  href: string;
  metadata: MarkdownMetadata;
};

const PreviewArticleCard = ({ href, metadata }: Props) => {
  return (
    <Link href={href}>
      <Card
        overflow="hidden"
        variant="elevated"
        direction={{ base: "column", sm: "row" }}
      >
        <Image
          objectFit="cover"
          src={metadata.thumbnail}
          alt={`${metadata.title} thumbnail`}
          maxW={{ base: "100%", sm: "200px" }}
        />
        <CardBody
          bgColor="white"
          _hover={{
            bgColor: "gray.50",
          }}
        >
          <Stack>
            <Heading color="gray.800" size="md">
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

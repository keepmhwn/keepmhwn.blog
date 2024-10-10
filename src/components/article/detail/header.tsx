import type { MarkdownMetadata } from "@/types/blog";

import { Heading, Image, Text, Stack } from "@chakra-ui/react";

import dayjs from "dayjs";

type Props = {
  metadata: MarkdownMetadata;
};

const ArticleHeader = ({ metadata }: Props) => {
  return (
    <Stack spacing="16px">
      <Image
        borderRadius="8px"
        objectFit="cover"
        alt={`${metadata.title}-thumbnail`}
        src={metadata.thumbnail}
      />
      <Heading color="gray.700">{metadata.title}</Heading>
      <Text color="gray.700">
        {dayjs(metadata.date).format("YYYY년 MM월 DD일")}
      </Text>
    </Stack>
  );
};

export default ArticleHeader;

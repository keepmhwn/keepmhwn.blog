import type { MarkdownMetadata } from "@/types/blog";

import Image from "next/image";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";

import dayjs from "dayjs";

type Props = {
  metadata: MarkdownMetadata;
};

const ArticleHeader = ({ metadata }: Props) => {
  return (
    <Stack spacing="16px">
      <Box
        sx={{ width: "100%", position: "relative" }}
        height={{ base: "150px", sm: "200px", md: "300px" }}
      >
        <Image
          fill
          objectFit="cover"
          quality={30}
          alt={`${metadata.title}-thumbnail`}
          src={metadata.thumbnail}
          style={{
            borderRadius: "8px",
          }}
        />
      </Box>
      <Heading color="gray.700">{metadata.title}</Heading>
      <Text color="gray.700">
        {dayjs(metadata.date).format("YYYY년 MM월 DD일")}
      </Text>
    </Stack>
  );
};

export default ArticleHeader;

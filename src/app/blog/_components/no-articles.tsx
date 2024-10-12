import Link from "next/link";
import { Button, Stack, Text } from "@chakra-ui/react";

type Props = {
  empty: boolean;
  children: React.ReactNode;
};

const NoArticles = ({ empty, children }: Props) => {
  if (empty) {
    return (
      <Stack alignItems="center" spacing="24px" mt="64px">
        <Text color="gray.500">아직 글이 작성되지 않았습니다.</Text>
        <Link href="/about">
          <Button colorScheme="teal">Go to About</Button>
        </Link>
      </Stack>
    );
  }
  return <>{children}</>;
};

export default NoArticles;

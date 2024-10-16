import Link from "next/link";
import { Stack, Text, Button } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Stack alignItems="center" spacing="24px" mt="64px">
      <Text color="gray.500">존재하지 않는 페이지입니다.</Text>
      <Link href="/blog">
        <Button colorScheme="teal">Go to Home</Button>
      </Link>
    </Stack>
  );
};

export default NotFound;

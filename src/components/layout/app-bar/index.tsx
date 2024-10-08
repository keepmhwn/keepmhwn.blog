import Link from "next/link";

import { Flex, Heading } from "@chakra-ui/react";

import Navigation from "./navigation";

const AppBar = () => {
  return (
    <Flex
      height="64px"
      padding="16px"
      justifyContent="space-between"
      zIndex="sticky"
      sx={{
        top: 0,
        position: "sticky",
        backgroundColor: "gray.50",
      }}
    >
      <Link href="/">
        <Heading as="h1" size="lg" color="gray.700" role="button">
          mHwn
        </Heading>
      </Link>
      <Navigation />
    </Flex>
  );
};

export default AppBar;

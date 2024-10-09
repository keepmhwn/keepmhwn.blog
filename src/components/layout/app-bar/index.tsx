import Link from "next/link";

import { Flex, Heading } from "@chakra-ui/react";

import Navigation from "./navigation";

const AppBar = () => {
  return (
    <Flex
      height="64px"
      padding={"24px 48px"}
      alignItems="center"
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
          mhwn
        </Heading>
      </Link>
      <Navigation />
    </Flex>
  );
};

export default AppBar;

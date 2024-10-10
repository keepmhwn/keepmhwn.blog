import { HStack, Button } from "@chakra-ui/react";

import Link from "next/link";

const NavigationMenuItem = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        color="gray.700"
        sx={{
          paddingX: 1,
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "inherit",
            borderBottom: "2px solid #718096",
          },
        }}
      >
        {title}
      </Button>
    </Link>
  );
};

const NavigationMenu = () => {
  return (
    <HStack spacing="24px">
      <NavigationMenuItem href="/blog" title="Blog" />
      <NavigationMenuItem href="/about" title="About" />
    </HStack>
  );
};

export default NavigationMenu;

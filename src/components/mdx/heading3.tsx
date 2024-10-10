import type { PropsWithChildren } from "react";

import { Heading } from "@chakra-ui/react";

const Heading3 = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Heading {...props} as="h3" color="gray.700" size="md" my="16px">
      {children}
    </Heading>
  );
};

export default Heading3;

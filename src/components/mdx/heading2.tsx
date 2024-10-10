import type { PropsWithChildren } from "react";

import { Heading } from "@chakra-ui/react";

const Heading2 = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Heading {...props} as="h2" color="gray.700" size="lg" my="16px">
      {children}
    </Heading>
  );
};

export default Heading2;

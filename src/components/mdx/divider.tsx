import type { PropsWithChildren } from "react";

import { Divider as ChakraDivider } from "@chakra-ui/react";

const Divider = ({ children, ...props }: PropsWithChildren) => {
  return (
    <ChakraDivider
      {...props}
      width="50%"
      height="1px"
      bgColor="gray.500"
      margin="0 auto"
      my="24px"
    >
      {children}
    </ChakraDivider>
  );
};

export default Divider;

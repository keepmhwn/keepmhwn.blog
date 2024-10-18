import type { PropsWithChildren } from "react";

import { UnorderedList as ChakraUnorderedList } from "@chakra-ui/react";

const UnorderedList = ({ children, ...props }: PropsWithChildren) => {
  return (
    <ChakraUnorderedList
      {...props}
      sx={{
        lineHeight: "30px",
      }}
    >
      {children}
    </ChakraUnorderedList>
  );
};

export default UnorderedList;

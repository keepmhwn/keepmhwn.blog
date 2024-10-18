import type { PropsWithChildren } from "react";

import { OrderedList as ChakraOrderedList } from "@chakra-ui/react";

const OrderedList = ({ children, ...props }: PropsWithChildren) => {
  return (
    <ChakraOrderedList
      {...props}
      sx={{
        lineHeight: "30px",
      }}
    >
      {children}
    </ChakraOrderedList>
  );
};

export default OrderedList;

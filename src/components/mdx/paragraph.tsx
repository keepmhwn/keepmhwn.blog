import type { PropsWithChildren } from "react";

import { Text } from "@chakra-ui/react";

const Paragraph = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Text {...props} as="p" color="gray.900" lineHeight="30px">
      {children}
    </Text>
  );
};

export default Paragraph;

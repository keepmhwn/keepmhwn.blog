import type { ReactNode } from "react";

import { Container } from "@chakra-ui/react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      mt="24px"
      maxW={{
        base: "280px",
        sm: "md",
        md: "container.sm",
        lg: "container.md",
      }}
    >
      {children}
    </Container>
  );
};

export default Main;

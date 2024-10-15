import type { ReactNode } from "react";

import { Container } from "@chakra-ui/react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      mt="48px"
      maxW={{
        base: "320px",
        sm: "md",
        md: "container.sm",
        lg: "container.md",
      }}
      sx={{
        flex: "1 1 0%",
      }}
    >
      {children}
    </Container>
  );
};

export default Main;

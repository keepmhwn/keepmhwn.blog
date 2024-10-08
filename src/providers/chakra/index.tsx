"use client";
import type { ReactNode } from "react";

import { ChakraProvider as Provider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

const ChakraProvider = ({ children }: { children: ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ChakraProvider;

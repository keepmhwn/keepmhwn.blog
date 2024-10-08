import type { Metadata } from "next";

import ChakraProvider from "@/providers/chakra";

export const metadata: Metadata = {
  title: "mHwn",
  description: "My Personal Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import ChakraProvider from "@/providers/chakra";

import AppBar from "@/components/layout/app-bar";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "keepmhwn",
  description: "문제를 효과적으로 해결하는 개발자가 되고자 합니다.",
  openGraph: {
    type: "website",
    locale: "ko-KR",
    siteName: "Keepmhwn",
    url: domain,
    description: "문제를 효과적으로 해결하는 개발자가 되고자 합니다.",
    images: {
      url: `${domain}/images/blog-thumbnail.png`,
      alt: "Keepmhwn Blog",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ChakraProvider>
          <AppBar />
          <Main>{children}</Main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}

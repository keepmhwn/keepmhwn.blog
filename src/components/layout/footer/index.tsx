import { Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      as="footer"
      maxW={{
        sm: "md",
        md: "container.sm",
        lg: "container.md",
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "96px",
        mb: "48px",
      }}
    >
      <Text>@2024. Minhwan Kim all rights reserved.</Text>
    </Container>
  );
};

export default Footer;

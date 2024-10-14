"use client";

import { IconButton, useToast } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

type Props = {
  email: string;
};

const EmailButton = ({ email }: Props) => {
  const toast = useToast();
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        description: "이메일이 복사되었습니다.",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } catch {
      toast({
        title: email,
        description: "이메일을 복사하는데 실패했습니다.",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <IconButton
      variant="outline"
      aria-label="email"
      icon={<EmailIcon />}
      onClick={handleClick}
    />
  );
};

export default EmailButton;

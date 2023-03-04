import { Box, chakra, ChakraProvider, useToast } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string | number;
  color: string;
  bgColor: string;
}

const CustomToast = ({ text, color, bgColor }: Props) => {
  const toast = useToast();

  return toast({
    position: "bottom-left",
    render: () => (
      <Box color={color} p={3} bg={bgColor}>
        {text}
      </Box>
    ),
  });
};

export default CustomToast;

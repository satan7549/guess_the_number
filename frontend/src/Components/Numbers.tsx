import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Numbers = (props: Props) => {
  const numberButtonStyle = {
    bgColor: "#BE00D8",
    borderRadius: "50%",
    mt: "8",
    boxShadow: "lg",
    _hover: { bgColor: "#0A0A0A", color: "white" },
    color: "white",
    fontSize: "lg",
  };
  return (
    <Flex gap={"1"} wrap={"wrap"} justifyContent={"center"}>
      <Button {...numberButtonStyle}>1</Button>
      <Button {...numberButtonStyle}>2</Button>
      <Button {...numberButtonStyle}>3</Button>
      <Button {...numberButtonStyle}>4</Button>
      <Button {...numberButtonStyle}>5</Button>
      <Button {...numberButtonStyle}>0</Button>
    </Flex>
  );
};

export default Numbers;

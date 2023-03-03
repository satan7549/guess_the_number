import React, { useState } from "react";
import { Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";

const MakeRoom = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex borderRadius={"12"} boxShadow={"dark-lg"} w={"90%"} h={"500px"} direction={"column"} bgColor={"#1B1B1B"} justifyContent={"center"} alignItems={"center"}>
      <Text textAlign={"center"} color={"#BE00D8"} as={"b"} fontSize={"4xl"}>
        Create
      </Text>
      <Text textAlign={"center"} color={"#BE00D8"} as={"b"} fontSize={"4xl"}>
        _____ or _____
      </Text>
      <Text textAlign={"center"} color={"#BE00D8"} as={"b"} fontSize={"4xl"}>
        Join a Room
      </Text>
      <form>
        <Flex mt={"8"} gap={"2"} direction={"column"}>
          <InputGroup size="md">
            <Input pr="4.5rem" bgColor={"white"} type={show ? "text" : "password"} placeholder="Put Your Room Key" required minLength={8} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" bgColor={"#BE00D8"} _hover={{ bgColor: "black" }} color={"white"} onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type={"submit"} bgColor={"#BE00D8"} _hover={{ bgColor: "black" }} color={"white"}>
            Create/Join Room
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default MakeRoom;

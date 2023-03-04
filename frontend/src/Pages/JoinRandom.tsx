import { Flex, Heading, Text } from "@chakra-ui/react";
import { FadeIn } from "react-slide-fade-in";
import PlayButton from "../Components/PlayButton";

const JoinRandom = () => {
  return (
    <Flex borderRadius={"12"} boxShadow={"dark-lg"} w={"90%"} h={"500px"} direction={"column"} bgColor={"#1B1B1B"} justifyContent={"center"} alignItems={"center"}>
      <Text textAlign={"center"} color={"#BE00D8"} as={"b"} fontSize={"4xl"}>
        Join a Room
      </Text>
      <Flex mt={"8"} gap={"2"} direction={"column"}>
        <PlayButton type="stranger" />
      </Flex>
    </Flex>
  );
};

export default JoinRandom;

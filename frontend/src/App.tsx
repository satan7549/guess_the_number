import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FadeIn } from "react-slide-fade-in";
import MakeRoom from "./Components/MakeRoom";
import Numbers from "./Components/Numbers";
import ScoreCard from "./Components/ScoreCard";

const App = () => {
  const [tries1, setTries1] = useState<number>(3);
  const [tries2, setTries2] = useState<number>(3);

  return (
    <>
      <Flex w={"100%"} bgColor={"black"} h={"100vh"} border={"3px solid red"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <FadeIn from="top" positionOffset={400} triggerOffset={400} delayInMilliseconds={0}>
          <Heading transition={"1000ms"} size={{ base: "lg", sm: "xl", md: "2xl", lg: "4xl", xl: "4xl" }} color={"white"}>
            Guess The Number
          </Heading>
        </FadeIn>
        <Flex borderRadius={"12"} w={"90%"} mt={"5"} h={"600px"} bgColor={"white"} justifyContent={"center"} alignItems={"center"}>
          {/* <MakeRoom /> */}
          <Flex
            position={"relative"}
            borderRadius={"12"}
            boxShadow={"dark-lg"}
            w={"90%"}
            h={"500px"}
            direction={"column"}
            bgColor={"#1B1B1B"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex gap={"5"}>
              <ScoreCard player={"One"} score={0} tries={tries1} />
              <ScoreCard player={"Two"} score={0} tries={tries2} />
            </Flex>
            <Numbers />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default App;

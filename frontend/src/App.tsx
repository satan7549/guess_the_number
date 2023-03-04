import { Flex, Heading } from "@chakra-ui/react";
import { FadeIn } from "react-slide-fade-in";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  return (
    <>
      <Flex w={"100%"} bgColor={"black"} h={"100vh"} border={"3px solid red"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <FadeIn from="top" positionOffset={400} triggerOffset={400} delayInMilliseconds={0}>
          <Heading transition={"1000ms"} size={{ base: "lg", sm: "xl", md: "2xl", lg: "4xl", xl: "4xl" }} color={"white"}>
            Guess The Number
          </Heading>
        </FadeIn>
        <Flex borderRadius={"12"} w={"90%"} mt={"5"} h={"600px"} bgColor={"white"} justifyContent={"center"} alignItems={"center"}>
          <AllRoutes />
        </Flex>
      </Flex>
    </>
  );
};

export default App;

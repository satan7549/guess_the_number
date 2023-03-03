import { Flex, Heading, Text } from "@chakra-ui/react";
import { MdOutlineStar } from "react-icons/md";

type Props = {
  player: string;
  score: number;
  tries: number;
};

const ScoreCard = ({ player, score, tries }: Props) => {
  return (
    <Flex borderRadius={"12"} boxShadow={"dark-lg"} w={"110px"} h={"110px"} direction={"column"} bgColor={"#BE00D8"} justifyContent={"center"} alignItems={"center"}>
      <Flex>
        {[...Array(tries)].map((el, id) => {
          return <MdOutlineStar color="white" />;
        })}
      </Flex>
      <Text color={"white"} fontSize={"sm"} as={"cite"} textAlign={"center"}>
        Player {player}
      </Text>
      <Text as={"b"} color={"white"} textAlign={"center"}>
        Score
      </Text>
      <Heading color={"white"}>{score}</Heading>
    </Flex>
  );
};

export default ScoreCard;

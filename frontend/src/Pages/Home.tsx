import { Flex, Spinner } from "@chakra-ui/react";
import Numbers from "../Components/Numbers";
import ScoreCard from "../Components/ScoreCard";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../Context/SocketContext";

type Props = {};

const Home = (props: Props) => {
  const { socket, room, player_1, player_2 } = useContext(SocketContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let roomId = location.pathname.split("/")[2];

    let size = Object.keys(socket).length;

    if (size > 0) {
      socket.emit("room:join", { roomId }, (err: any, room: any) => {
        if (err) navigate("/");
      });
    }
  }, [socket]);

  const [tries1, setTries1] = useState<number>(3);
  const [tries2, setTries2] = useState<number>(3);

  const players = room?.players;

  return (
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
      {players[player_1].optionLock ? (
        <>
          <Flex gap={"5"}>
            <ScoreCard player={"One"} score={0} tries={tries1} />
            <ScoreCard player={"Two"} score={0} tries={tries2} />
          </Flex>
          <Numbers />
        </>
      ) : (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      )}
    </Flex>
  );
};

export default Home;

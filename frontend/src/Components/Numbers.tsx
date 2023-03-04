import { Button, Flex } from "@chakra-ui/react";

import { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";

const 
Numbers = () => {
  const { socket, room, player_1, player_2 } = useContext(SocketContext);

  const handleChange = (guessNo: number) => {
    const players = room?.players;

    if (players[player_1].optionLock === true) {
      players[player_1].guess = guessNo;
      players[player_1].optionLock = false;
      players[player_2].optionLock = true;
      socket.emit("room:update", room);

      if (players[player_2].guess === players[player_1].guess && players[player_1].guess !== 0 && players[player_2].guess !== 0) {
        players[player_1].score += 1;
        players[player_1].guess = 0;
        players[player_2].guess = 0;
        socket.emit("room:update", room);
      }
    } else {
      players[player_2].guess = guessNo;
      players[player_2].optionLock = false;
      players[player_1].optionLock = true;
      socket.emit("room:update", room);
      if (players[player_2].guess === players[player_1].guess && players[player_1].guess !== 0 && players[player_2].guess !== 0) {
        players[player_2].score += 1;
        players[player_1].guess = 0;
        players[player_2].guess = 0;
        socket.emit("room:update", room);
      }
    }

    console.log("guessNo", guessNo);
    // console.log(player_1, player_2);

    console.log("player in room", players);
    // socket.emit("room:update", room);
  };

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
      <Button onClick={() => handleChange(1)} {...numberButtonStyle}>
        1
      </Button>
      <Button onClick={() => handleChange(2)} {...numberButtonStyle}>
        2
      </Button>
      <Button onClick={() => handleChange(3)} {...numberButtonStyle}>
        3
      </Button>
      <Button onClick={() => handleChange(4)} {...numberButtonStyle}>
        4
      </Button>
      <Button onClick={() => handleChange(5)} {...numberButtonStyle}>
        5
      </Button>
    </Flex>
  );
};

export default Numbers;

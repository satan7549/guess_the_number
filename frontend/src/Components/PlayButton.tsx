import { Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";

type Props = {
  type: string;
};

const PlayButton = ({ type }: Props) => {
  const { socket, navigate } = useContext(SocketContext);
  const handleChange = (type: string) => {
    socket.emit("room:create", { type }, (err: any, roomId: string) => {
      navigate(`/home/${roomId}`);
    });
  };

  return (
    <Button onClick={() => handleChange(type)} bgColor={"#BE00D8"} _hover={{ bgColor: "black" }} color={"white"}>
      Let's Play
    </Button>
  );
};

export default PlayButton;

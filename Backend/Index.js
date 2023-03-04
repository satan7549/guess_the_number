const express = require("express");
const socket = require("socket.io");
const { roomHandler } = require("./roomHandler");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Welcom to Home Page");
});


const rooms = [];

const port = 8080;

const server = app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

const io = socket(server);

io.on("connection", (socket) => {
  console.log("Connected", socket.id);
  
  roomHandler(io, socket, rooms);

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
 
});

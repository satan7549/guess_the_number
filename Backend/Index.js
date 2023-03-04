const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const { roomHandler } = require("./roomHandler");
const cors = require("cors");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Welcom to Home Page");
});

const rooms = [];

const port = 8080;

httpServer.listen(port, () => {
  console.log(`server is running on ${port}`);
});

io.on("connection", (socket) => {
  console.log("Connected", socket.id);

  roomHandler(io, socket, rooms);

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
});

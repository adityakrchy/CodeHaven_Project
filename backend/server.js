import express from "express";
import http from "http";
import { Server } from "socket.io";
import { Socket } from "socket.io-client";

const app = express();

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`socket connection: ${socket.id}`);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

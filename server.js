const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = express()
  .use(express.static('public'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));



const io = socketIO(server);

io.on('connection', newConnection);

function newConnection(socket) {
  console.log("new connection" + socket.id)
  socket.on('disconnect', () => console.log('Client disconnected'));

  socket.on('mouse', mouseMsg)

  function mouseMsg(data) {
    console.log(data)
    socket.broadcast.emit('mouse', data)
  }
}

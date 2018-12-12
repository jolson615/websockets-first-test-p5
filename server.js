// var express = require('express')
// var app = express()
// var server = app.listen(3000)
// app.use(express.static('public'))
//
// console.log("server running")
//
// var socket = require('socket.io')
//
// var io = socket(server)
//
// io.sockets.on('connection', newConnection)

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 8080;
const INDEX = path.join(__dirname, 'index.html');

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

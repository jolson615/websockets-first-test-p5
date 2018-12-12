var socket

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100)
  background(220, 0, 90)
  socket = io()
  console.log(socket)
  socket.on('mouse', newDrawing)
  myColor = random(360)
}

function newDrawing(data) {
  fill(data.color, 50, 50)
  ellipse(data.x, data.y, 36)
}

function draw() {
  noStroke()
  // background(220, 0, 90)
}

function mouseDragged() {
  fill(myColor, 50, 50)
  ellipse(mouseX, mouseY, 50)
  var data = {
    x: mouseX,
    y: mouseY,
    color: myColor
  }
  socket.emit('mouse', data)
}

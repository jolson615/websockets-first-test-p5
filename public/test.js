var socket

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100)
  background(220, 0, 90)
  socket = io.connect('http://localhost:3000')
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
  var data = {
    x: mouseX,
    y: mouseY,
    color: myColor
  }
  fill(myColor, 50, 50)
  ellipse(mouseX, mouseY, 50)
  socket.emit('mouse', data)
}

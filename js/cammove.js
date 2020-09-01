function touchMove(event) {
  var lastx = 1500;
  var lasty = 1500;
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  w = document.getElementById("canvas").offsetWidth;
  h = document.getElementById("canvas").offsetHeight;
  x = Math.round(1500 + (x-w/2)/w*1800);
  y = Math.round(1500 + (y-h/2)/h*1800);
  if ((x-lastx <=-20) || (x-lastx >=20)){
    lastx = x;
    document.getElementById("canvas").innerHTML = x + ", " + y;
    socket.emit('eventServer', x + "h");
  }
  if ((y-lasty <=-20) || (y-lasty >=20)){
    lasty = y;
    socket.emit('eventServer', y + "v");
  }
}
function touchEnd() {
  var x = 1500;
  var y = 1500;
 document.getElementById("canvas").innerHTML =  x + ", " + y;
  socket.emit('eventServer', x + "h");
  socket.emit('eventServer', y + "v");
}
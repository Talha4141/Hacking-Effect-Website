var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var w = window.innerWidth;
var h = window.innerHeight;

canvas.width = w;
canvas.height = h;

var fontsize = 15;
var columns = Math.ceil(w / fontsize);

var drops = [];

for (var i=0; i<columns; i++) {
  drops.push(0);
}

var str = "my name is kanon and um a developer";

function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, w, h);
  //context.fontsize = "1000" + fontsize + "px";
  context.fillStyle = "#00cc55";

  for (var i = 0; i < columns; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * fontsize;
    var y = drops[i] * fontsize;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
draw();
setInterval(draw, 35);

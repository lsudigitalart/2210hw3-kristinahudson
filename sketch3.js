//Kristin Hudson hw3

var x;

function setup() {
createCanvas(1280, 800);
var c = color(242, 216, 223); //pink color
var d = color(211, 211, 211); //blue grey color
background(c);
strokeWeight(8);
stroke(d);

println("variable=", x, "width=", width , "height=", height);
println("the value n:", n);

for (var n = 20; n < height; n += 20) {
  line(n, 0, n + n/4, 400);
  line(n+ n/4, 400, n*.7, 1280);
  }
}

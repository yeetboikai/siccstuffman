var img1;
var img2;
var img3;
let x;
let y;

function preload() {
  img1 = loadImage('assets/spoopy_pig.png');
  img2 = loadImage('assets/wowzers_alligator.png');
  img3 = loadImage('assets/sharky_shark.jpg');

}
function setup() {
createCanvas (1920,1080);
background (255,0,0);
imageMode (CENTER);
}

function draw() {
x=random (0,1920);
y=random(0,1080);
image(img1, x, y);
image(img2, x+200, y+200);
image(img3, x+300, y+300);
}

for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r * 5);
  line(50, i, 50 + r, i);
}

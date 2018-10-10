var img1;
var img2;
var img3;
let x;
let y;

function preload() {
  img1 = loadImage('assets/spoopy_pig.png');

}
function setup() {
createCanvas (1920,1080);
background (255,0,0);
imageMode (CENTER);

}

function draw() {
  scale(1/5);
  image(img1, random (1920,0), random(0,1080));
  image(img2, random (1920,0), random(0,1080));
  image(img3, random (1920,0), random(0,1080));

}

let font;
let fontsize = 40;

var gif = null;
var recorder = null;

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.ttf');
}

function setup() {
  createCanvas(710, 400);
  recorder = p5Gif.capture();

  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

}

function draw() {
  background(160);

  textAlign(RIGHT);
  drawWords(width * 0.25);

  textAlign(CENTER);
  drawWords(width * 0.5);


  textAlign(LEFT);
  drawWords(width * 0.75);

  recorder.addFrame();

  if (frameCount === 1) recorder.download();

}

function drawWords(x) {
 
  fill(0);
  text('hello', x, 80);

  fill(65);
  text('world', x, 150);

  fill(190);
  text('hello', x, 220);

  fill(255);
  text('world', x, 290);
}

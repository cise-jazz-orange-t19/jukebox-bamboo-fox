let fontsize = 40;
let saveButton;
let songButton;
let sliderRed;
let sliderGreen;
let sliderBlue;
let song, analyzer;

function preload() {
	song = loadSound('assets/LOOP14.mp3');
}

function setup() {
	createCanvas(710, 400);
	background(160);

	analyzer = new p5.Amplitude();
	analyzer.setInput(song);

	textSize(fontsize);
	textAlign(CENTER, CENTER);

	saveButton = createButton('save image');
	saveButton.mousePressed(saveImage);

	songButton = createButton('play song');
	songButton.mousePressed(playSong);
	sliderRed = createSlider(0, 255, 0, 0);
	sliderRed.style('width', '80px');

	sliderGreen = createSlider(0, 255, 0, 0);
	sliderGreen.style('width', '80px');
	sliderBlue = createSlider(0, 255, 0, 0);
	sliderBlue.style('width', '80px');
}

function draw() {
	let r = sliderRed.value();
	let g = sliderGreen.value();
	let b = sliderBlue.value();
	colorMode(RGB, 100);
	background(r, g, b);

	visuals();

	textAlign(RIGHT);
	drawWords(width * 0.25);

	textAlign(CENTER);
	drawWords(width * 0.5);

	textAlign(LEFT);
	drawWords(width * 0.75);

}

function drawWords(x) {
	fill(0);
	text("hello", x, 80);

	fill(65);
	text("world", x, 150);

	fill(190);
	text("hello", x, 220);

	fill(255);
	text("world", x, 290);
}

function playSong() {
	if (song.isPlaying() == false) {
		song.play();
	} else {
		song.stop();
	}
}

function visuals() {
	let rms = analyzer.getLevel();
	fill(255);
	stroke(0);

	ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}

function saveImage() {
	save('hello-world.jpg');
}
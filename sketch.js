const fps = 30;
const note_names = ["C", "D♭", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];

var nav;

function setup() {
    renderer = createCanvas(window.innerWidth / 2.5, window.innerHeight * 0.85);
    renderer.parent("canvCont")
    frameRate(fps); //there are other ways to do timing, like setInterval()

    nav = new Navigator();
}

function draw() {
    background(255);

    nav.draw();
}

function mousePressed() {
    nav.mousePressed();
}

function mouseReleased() {
    nav.mouseReleased();
}

function windowResized() {
    resizeCanvas(window.innerWidth / 2.5, window.innerHeight * 0.85)
}
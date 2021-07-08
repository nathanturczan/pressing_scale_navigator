var renderer;
var main_polygon;

const fps = 30;
const note_names = ["C", "D♭", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];
const default_animation_curve = (x) => { return (1 / (1 + pow(x / (1 - x), -3))) };

function setup() {
    ellipseMode(RADIUS);
    renderer = createCanvas(window.innerWidth, window.innerHeight);
    frameRate(fps); //there are other ways to do timing, like setInterval()

    main_polygon = new Polygon(width / 2, height / 2, 150, "a_acoustic")
}

function draw() {
    background(255);
    main_polygon.draw()
}
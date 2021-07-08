var renderer;
var test_pol;

function setup() {
    ellipseMode(RADIUS);
    renderer = createCanvas(window.innerWidth, window.innerHeight);
    frameRate(30); //there are other ways to do timing, like setInterval()

    test_pol = new Polygon(width / 2, height / 2, 100, "c_diatonic")
}

function draw() {
    test_pol.draw()
}
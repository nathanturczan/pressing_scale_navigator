var renderer;
var main_polygon, neighbors = [];
var old_main_polygon, old_neighbors;

const fps = 30;
const note_names = ["C", "D♭", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];
const default_animation_curve = (x) => { return (1 / (1 + pow(x / (1 - x), -3))) };

function setup() {
    ellipseMode(RADIUS);
    renderer = createCanvas(window.innerWidth, window.innerHeight);
    frameRate(fps); //there are other ways to do timing, like setInterval()

    main_polygon = new Polygon(width / 2, height / 2, 125, "c_diatonic")
    neighbors = main_polygon.getNeighbors();


}

function draw() {
    background(255);
    var allPolygons = neighbors.concat([main_polygon, old_main_polygon], old_neighbors)

    for (var p of allPolygons) {
        if (p) p.draw();
    }
}

function mouseReleased() {
    var allPolygons = neighbors.concat([main_polygon, old_main_polygon], old_neighbors)

    for (var p of allPolygons) {
        if (p && p.click(mouseX, mouseY)) {
            if (p == main_polygon) {

            } else {
                changeMainScale(p)
                return
            }
        }
    }
}

function changeMainScale(new_main, all_duration = 1) {

    old_neighbors = [...neighbors]
    old_main_polygon = main_polygon;

    main_polygon = new_main
    neighbors = main_polygon.getNeighbors();

    //Handle duplicates
    old_neighbors.splice(old_neighbors.indexOf(main_polygon), 1)

    var index = neighbors.findIndex((x) => { return old_main_polygon.isMatching(x) });
    if (index !== -1) {
        neighbors[index] = old_main_polygon;
    }

    // Main polygons
    main_polygon.move(width / 2, height / 2, all_duration, 125)
    old_main_polygon.move(width / 2, height / 2, all_duration, 0, 0)

    for (var old of old_neighbors) {
        old.move(old.x, old.y, all_duration, 0, 0)
    }

    var positions = main_polygon.getNeighborPositions(width / 2, height / 2, 125)
    for (var i = 0; i < neighbors.length; i++) {
        try {
            neighbors[i].move(positions[i].x, positions[i].y, all_duration, positions[i].size, 1)
        } catch (error) {}
    }
}
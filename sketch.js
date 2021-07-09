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

    // create the initial polygons
    main_polygon = new Polygon(width / 2, height / 2, 125, "c_diatonic")
    neighbors = main_polygon.getNeighbors();
}

function draw() {
    background(255);
    var allPolygons = neighbors.concat([main_polygon, old_main_polygon], old_neighbors)

    //draw all the polygons
    for (var p of allPolygons) {
        if (p) p.draw();
    }
}

function mouseReleased() {
    var allPolygons = neighbors.concat([main_polygon, old_main_polygon], old_neighbors)

    // check for clicks on all polygons
    for (var p of allPolygons) {
        if (p && p.click()) {
            if (p == main_polygon) {
                //ignore the click of the clicked polygon is the main polygon
            } else {
                changeMainScale(p)
                return
            }
        }
    }
}

function changeMainScale(new_main, all_duration = 1) {
    // push the current polygons into old polygons
    old_neighbors = [...neighbors]
    old_main_polygon = main_polygon;

    main_polygon = new_main
    neighbors = main_polygon.getNeighbors();

    //Handle duplicates
    old_neighbors.splice(old_neighbors.indexOf(main_polygon), 1)

    // duplicate of main polygon
    var index = neighbors.findIndex((x) => { return old_main_polygon.isMatching(x) });
    if (index !== -1) {
        neighbors[index] = old_main_polygon;
    }

    // duplicates between neighbors
    for (var n = 0; n < neighbors.length; n++) {
        for (var old of old_neighbors) {
            if (neighbors[n].isMatching(old)) {
                neighbors[n] = old;
            }
        }
    }

    // Main polygons animation
    main_polygon.move(width / 2, height / 2, all_duration, 125)
    old_main_polygon.move(width / 2, height / 2, all_duration, 0, 0)

    // Neighboring polygons animation
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
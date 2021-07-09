var renderer;
var main_polygon, neighbors = [];
var old_main_polygon, old_neighbors;
var preview_polygons = []
var global_size = 125
var preview_polygons_ready = false

const fps = 30;
const note_names = ["C", "D♭", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];
const default_animation_curve = (x) => { return (1 / (1 + pow(x / (1 - x), -3))) };

function setup() {
    ellipseMode(RADIUS);
    renderer = createCanvas(window.innerWidth, window.innerHeight);
    frameRate(fps); //there are other ways to do timing, like setInterval()

    // create the initial polygons
    main_polygon = new Polygon(width / 2, height / 2, global_size, "c_diatonic")
    neighbors = main_polygon.getNeighbors();
}

function draw() {
    background(255);
    var allPolygons = [main_polygon].concat(preview_polygons, old_neighbors)
    allPolygons.push(...neighbors)
    allPolygons.push(old_main_polygon)

    //draw all the polygons
    for (var p of allPolygons) {
        if (p) p.draw();
    }
}

function mousePressed() {
    // check for clicks on all polygons
    for (var p of neighbors) {
        if (p && p.click() && !p.animation.active) {
            preview_polygons = p.getNeighbors()

            // duplicates between neighbors
            var all_current = neighbors.concat([main_polygon])
            var actually_new_polygons = new Set();
            for (var n = 0; n < all_current.length; n++) {
                for (var pre = 0; pre < preview_polygons.length; pre++) {
                    if (all_current[n].isMatching(preview_polygons[pre])) {
                        preview_polygons[pre] = all_current[n];
                    }
                }
            }

            // find polygons which are actually new
            for (var pre = 0; pre < preview_polygons.length; pre++) {
                if (!all_current.includes(preview_polygons[pre])) {
                    actually_new_polygons.add(preview_polygons[pre])
                }
            }

            // convert to array
            actually_new_polygons = Array.from(actually_new_polygons)

            // take care of the fanning out (not all the way around)
            var total_poly = neighbors.length;
            var ind = main_polygon.getNeighbors().findIndex(x => x.isMatching(p))
                //var positions = p.getNeighborPositions(p.x, p.y, p.radius, undefined, undefined, PI / 2 + (2 * PI * (ind - 0.5)) / total_poly, PI / 2 + (2 * PI * (ind + 0.5)) / total_poly, actually_new_polygons.length)
            var positions = p.getNeighborPositions(p.x, p.y, p.radius, undefined, undefined, PI / 2, PI / 2 + (2 * PI), actually_new_polygons.length)

            /*
            //position them
            for (var a_n = 0; a_n < actually_new_polygons.length; a_n++) {
                var pol = preview_polygons.find(x => actually_new_polygons[a_n].isMatching(x))

                pol.set(["x", positions[a_n].x], ["y", positions[a_n].y], ["size", positions[a_n].size])
            }*/

            for (var prev of actually_new_polygons) {
                var oldx = prev.x;
                var oldy = prev.y;

                prev.set(["x", p.x], ["y", p.y])
                prev.move(oldx, oldy, prev.size)
            }

            preview_polygons_ready = true;
            return
        }
    }
}

function mouseReleased() {
    // check for clicks on all polygons
    for (var p of neighbors) {
        if (p && p.click() && !p.animation.active && preview_polygons_ready) {
            changeMainScale(p)
            return
        }
    }

    preview_polygons = []
    preview_polygons_ready = false;
}

function changeMainScale(new_main, all_duration = 1) {
    // push the current polygons into old polygons
    old_neighbors = [...neighbors]
    old_main_polygon = main_polygon;

    main_polygon = new_main
    neighbors = preview_polygons;

    //Handle duplicates
    old_neighbors.splice(old_neighbors.indexOf(main_polygon), 1)

    // duplicate of main polygon
    var index = neighbors.findIndex((x) => { return old_main_polygon.isMatching(x) });
    if (index !== -1) {
        neighbors[index] = old_main_polygon;
    }

    // Main polygons animation
    main_polygon.move(width / 2, height / 2, all_duration, global_size)
        //old_main_polygon.move(width / 2, height / 2, all_duration, 0, 0)

    var positions = main_polygon.getNeighborPositions(width / 2, height / 2, global_size)
    for (var i = 0; i < neighbors.length; i++) {
        try {
            neighbors[i].move(positions[i].x, positions[i].y, all_duration, positions[i].size, 1)
        } catch (error) {}
    }

    // Neighboring polygons animation
    for (var old of old_neighbors) {
        old.move(old_main_polygon.animation.target.x, old_main_polygon.animation.target.y, all_duration, 0, 1)
    }
}
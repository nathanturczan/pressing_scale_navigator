class Polygon {
    constructor(x, y, size, scale) {
        this.x = x
        this.y = y
        this.radius = size;

        this.data = data.scales[scale]
        this.points_count = this.data.adjacent_scales.length;

        this.animation = {
            active: false,
            animation_curve: default_animation_curve,
            start_frame: 0,
            end_frame: 1,
            duration: 1,
            target: {
                size: this.radius,
                x: this.x,
                y: this.y
            },
            start: {
                size: this.radius,
                x: this.x,
                y: this.y
            }
        }

        this.opacity = 1;

        this.scale = scale;
        this.name = `${note_names[this.data.root]} ${this.data.scale_class.replace("_", " ")}`;
    }

    draw() {
        push()
        this.animation_lerp()

        // translate so we dont have to always write x and y
        translate(this.x * width, this.y * height)

        noStroke();
        var angle = TWO_PI / this.points_count;
        var fontcolor;
        beginShape();

        // set the color
        // we always have the color as an array of 3 numbers even if it's grey
        // we need that cuz we also push in the opacity (alpha channel) 
        if (this.data.scale_class == "whole_tone") {
            fontcolor = Array(3).fill(map(this.data.root % 2, 0, 1, 200, 150));
        } else if (this.data.scale_class == "octatonic") {
            fontcolor = Array(3).fill(map(this.data.root % 3, 0, 2, 200, 133));
        } else if (this.data.scale_class == "hexatonic") {
            fontcolor = Array(3).fill(map(this.data.root % 4, 0, 3, 200, 100));
        } else {
            fontcolor = hsvToRgb(map((this.data.root * 7) % 12, 11, 0, 0, 1),
                map((this.data.root * 7) % 12, 0, 11, 0.1, 0.5),
                1);
        }

        // add in the opacity
        fontcolor.push(255 * this.opacity)
        fill(fontcolor);

        // draw the polygon
        // addaptation of your code to the object
        if (this.points_count == 12) {
            for (let a = 0; a < TWO_PI; a += angle) {
                let sx = cos(a + (TWO_PI / 24)) * this.radius;
                let sy = sin(a + (TWO_PI / 24)) * this.radius;
                vertex(sx, sy);
            }
        } else if (this.points_count == 6) {
            if (this.data.scale_class == "diatonic") {
                for (let a = 0; a < TWO_PI; a += angle) {
                    let sx = cos(a + (TWO_PI / 12)) * this.radius;
                    let sy = sin(a + (TWO_PI / 12)) * this.radius;
                    vertex(sx, sy);
                }
            }
            if (this.data.scale_class == "acoustic") {
                vertex(this.radius, this.radius * 0.5);
                vertex(-this.radius, this.radius * 0.5);
                vertex(-this.radius, -this.radius * 0.5);
                vertex(this.radius, -this.radius * 0.5);
            }
            if (this.data.scale_class == "whole_tone") {
                vertex(-this.radius * 0.5, -this.radius);
                vertex(this.radius * 0.5, -this.radius);
                vertex(this.radius * 0.5, this.radius);
                vertex(-this.radius * 0.5, this.radius);
            }
            if (this.data.scale_class == "hexatonic") {
                vertex(this.radius * 0.65, this.radius);
                vertex(this.radius * 0.65, -this.radius);
                vertex(-this.radius, this.radius * 0.01);
            }
            if (this.data.scale_class == "harmonic_major") {
                vertex(this.radius, this.radius * 0.25);
                vertex(-this.radius, this.radius * 1.25);
                vertex(-this.radius, -this.radius * 0.25);
                vertex(this.radius, -this.radius * 1.75);
            }
            if (this.data.scale_class == "harmonic_minor") {
                vertex(this.radius, this.radius * 1.25);
                vertex(-this.radius, this.radius * 0.25);
                vertex(-this.radius, -this.radius * 1.75);
                vertex(this.radius, -this.radius * 0.25);
            }
        }
        endShape(CLOSE);

        //write the text
        fill(80, 80, 80, 255 * this.opacity);
        var font_size_2 = this.radius / 3;
        var scale_class = this.data.scale_class.replace("_", "\n");
        textSize(font_size_2);
        textAlign(CENTER, CENTER);

        text(note_names[this.data.root], 0, -font_size_2 / 2);
        // the mess at the end of the line just checks if the text has 2 lines and then it offsets the text more if necessary
        text(scale_class, 0, (scale_class.split("\n").length > 1 ? font_size_2 : font_size_2 / 2)); //print out scale class
        pop()
    }

    getNeighbors(neighbor_size = this.radius / 2, offset_radius = this.radius * 2.5, start_angle = PI / 2, end_angle = 5 / 2 * PI) {
        var total_neigh = this.data.adjacent_scales.length;
        var neigh = []

        // use the getNeighborPositions to generate new objects for the neighbors of this object
        var positions = this.getNeighborPositions(this.x, this.y, this.size, neighbor_size, offset_radius, start_angle, end_angle);
        for (var n = 0; n < total_neigh; n++) {
            neigh.push(
                new Polygon(
                    positions[n].x,
                    positions[n].y,
                    positions[n].size,
                    this.data.adjacent_scales[n]
                )
            )
        }

        return neigh
    }

    getNeighborPositions(x = this.x, y = this.y, size = this.radius, neighbor_size = undefined, offset_radius = undefined, start_angle = PI / 2, end_angle = 5 / 2 * PI, total_neigh = this.data.adjacent_scales.length) {
        // this function just radially generates the positions and sizes for the neighbors
        // optional values can be passed in to generate positions for a state in which the object currently is not
        var neigh = []
        offset_radius = !offset_radius ? size * 2.5 : offset_radius
        neighbor_size = !neighbor_size ? size / 2 : neighbor_size

        for (var n = 0; n < total_neigh; n++) {
            var angle = (start_angle - end_angle) * -n / total_neigh + start_angle
            neigh.push({
                x: x + cos(angle) * offset_radius / width,
                y: y + sin(angle) * offset_radius / height,
                size: neighbor_size
            })
        }

        return neigh
    }

    isMatching(other) {
        // check if two objects are matching in type
        return other.name == this.name
    }

    animation_lerp() {
        // lerp the animation of the object
        if (this.animation.active) {
            var progress = (frameCount - this.animation.start_frame) / (this.animation.end_frame - this.animation.start_frame);
            progress = this.animation.animation_curve(progress);

            if (progress > 1) {
                this.animation.active = false
                return
            }

            this.x = lerp(this.animation.start.x, this.animation.target.x, progress)
            this.y = lerp(this.animation.start.y, this.animation.target.y, progress)
            this.radius = lerp(this.animation.start.size, this.animation.target.size, progress)
            this.opacity = lerp(this.animation.start.opacity, this.animation.target.opacity, progress)
        }
    }

    move(target_x, target_y, duration_seconds = 1, target_size = this.radius, target_opacity = 1) {
        // start the animation of an object
        var duration = fps * duration_seconds;

        this.animation = {
            active: true,
            animation_curve: default_animation_curve,
            start_frame: frameCount,
            end_frame: frameCount + duration,
            duration: duration,
            target: {
                size: target_size,
                x: target_x,
                y: target_y,
                opacity: target_opacity
            },
            start: {
                size: this.radius,
                x: this.x,
                y: this.y,
                opacity: this.opacity
            }
        }
    }

    set(...[]) {
        for (var i = 0; i < arguments.length; i++) {
            this[arguments[i][0]] = arguments[i][1]
        }
    }

    click(x_in = mouseX, y_in = mouseY) {
        // check if the object has been clicked
        return (dist(x_in, y_in, this.x * width, this.y * height) < this.radius);
    }
}
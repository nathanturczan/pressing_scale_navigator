class Polygon {
    constructor(x, y, size, scale) {
        this.x = x
        this.y = y
        this.radius = size;

        this.data = data.scales[scale]
        this.points_count = this.data.adjacent_scales.length;
    }

    draw() {
        push()
        translate(this.x, this.y)

        noStroke();
        var angle = TWO_PI / this.points_count;
        beginShape();

        if (this.data.scale_class == "whole_tone") {
            fill(map(this.data.root % 2, 0, 1, 200, 150));
            fontcolor = map(this.data.root % 2, 0, 1, 200, 150);
        } else if (this.data.scale_class == "octatonic") {
            fill(map(this.data.root % 3, 0, 2, 200, 133));
            fontcolor = map(this.data.root % 3, 0, 2, 200, 133);
        } else if (this.data.scale_class == "hexatonic") {
            fill(map(this.data.root % 4, 0, 3, 200, 100));
            fontcolor = map(this.data.root % 4, 0, 3, 200, 100);
        } else {
            fill(hsvToRgb(map((this.data.root * 7) % 12, 11, 0, 0, 1),
                map((this.data.root * 7) % 12, 0, 11, 0.1, 0.5),
                1));
            fontcolor = hsvToRgb(map((this.data.root * 7) % 12, 11, 0, 0, 1),
                map((this.data.root * 7) % 12, 0, 11, 0.1, 0.5),
                1);
        }

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
                vertex(this.radius, this.radius * 0.5);
                vertex(this.radius, this.radius * 0.5);
                vertex(this.radius, this.radius * 0.5);
            }
            if (this.data.scale_class == "whole_tone") {
                vertex(this.radius * 0.5, this.radius);
                vertex(this.radius * 0.5, this.radius);
                vertex(this.radius * 0.5, this.radius);
                vertex(this.radius * 0.5, this.radius);
            }
            if (this.data.scale_class == "hexatonic") {
                vertex(this.radius * 0.65, this.radius);
                vertex(this.radius * 0.65, this.radius);
                vertex(this.radius, this.radius * 0.01);
            }
            if (this.data.scale_class == "harmonic_major") {
                vertex(this.radius, this.radius * 0.25);
                vertex(this.radius, this.radius * 1.25);
                vertex(this.radius, this.radius * 0.25);
                vertex(this.radius, this.radius * 1.75);
            }
            if (this.data.scale_class == "harmonic_minor") {
                vertex(this.radius, this.radius * 1.25);
                vertex(this.radius, this.radius * 0.25);
                vertex(this.radius, this.radius * 1.75);
                vertex(this.radius, this.radius * 0.25);
            }

        }
        endShape(CLOSE);
        pop()
    }
}
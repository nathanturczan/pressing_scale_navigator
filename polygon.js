class polygon {
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
        angle = TWO_PI / this.points_count;
        beginShape();

        if (this.points_count == 12) {
            for (let a = 0; a < TWO_PI; a += angle) {
                let sx = cos(a + (TWO_PI / 24)) * this.radius;
                let sy = sin(a + (TWO_PI / 24)) * this.radius;
                vertex(sx, sy);
            }
        } else if (this.points_count == 6) {
            if (sClass == "diatonic") {
                for (let a = 0; a < TWO_PI; a += angle) {
                    let sx = cos(a + (TWO_PI / 12)) * this.radius;
                    let sy = sin(a + (TWO_PI / 12)) * this.radius;
                    vertex(sx, sy);
                }
            }
            if (sClass == "acoustic") {
                vertex(this.radius, this.radius * 0.5);
                vertex(this.radius, this.radius * 0.5);
                vertex(this.radius, this.radius * 0.5);
                vertex(this.radius, this.radius * 0.5);
            }
            if (sClass == "whole_tone") {
                vertex(this.radius * 0.5, this.radius);
                vertex(this.radius * 0.5, this.radius);
                vertex(this.radius * 0.5, this.radius);
                vertex(this.radius * 0.5, this.radius);
            }
            if (sClass == "hexatonic") {
                vertex(this.radius * 0.65, this.radius);
                vertex(this.radius * 0.65, this.radius);
                vertex(this.radius, this.radius * 0.01);
            }
            if (sClass == "harmonic_major") {
                vertex(this.radius, this.radius * 0.25);
                vertex(this.radius, this.radius * 1.25);
                vertex(this.radius, this.radius * 0.25);
                vertex(this.radius, this.radius * 1.75);
            }
            if (sClass == "harmonic_minor") {
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
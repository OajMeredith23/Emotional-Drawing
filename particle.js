function Particle() {
    this.pos = createVector(random(width), height / 2 - 20 + random(40));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 1;
    this.h = 0;

    this.prevPos = this.pos.copy();

    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.follow = function (vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.show = function (emotion) {
        // console.log(emotion)
        if (emotion === undefined || emotion === null) {
            stroke(this.h, 255, 255);
        } else if (emotion === 'happy') {
            stroke(139, 255, 255, 255)
        } else if (emotion === 'surprised') {
            stroke(122, 255, 255, 214)
        } else {
            stroke(174, 255, 255, 255)
        }

        this.h = this.h + 1;
        if (this.h > 255) {
            this.h = 0;
        }
        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }

    }

}


let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield;
let fr;
let disturbance = 0.5;
let magnitude = 0.5;
let c = 0;
let angle;
let disturbanceSlider, magSlider;
neutral = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth,
    canvasHeight = canvasParent.offsetHeight;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');
    colorMode(HSB, 255);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols * rows);


    for (var i = 0; i < 300; i++) {
        particles[i] = new Particle();
    }
    background(51);

    ellipse(width / 2, height / 2, 10, 10)
}


function draw() {
    // background(0, map(neutral, 0, 1, 0, 155));
    background(0, 10);

    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;

            if (emotion === 'happy') {
                angle = sin(noise(xoff, yoff, zoff)) * TWO_PI * 0.5;
            } else if (emotion === 'surprised') {
                angle = noise(xoff, yoff, zoff) * TWO_PI
            } else if (emotion === 'neutral') {
                angle = sin(xoff, yoff, zoff) * 0.5;
            } else {
                angle = sin(xoff, yoff, zoff) * 0.1;
            }

            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            stroke(0, 50);
            // stroke(255, 125);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, scl, 0);
            // pop();
            // if (neutral > 0) {
            //     c = map(neutral, 0, 1, 255, 0)
            // }

            xoff += inc;
        }
        yoff += inc;

        zoff += 0.0003;
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show(emotion);
    }

}
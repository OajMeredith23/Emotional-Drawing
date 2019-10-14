

let inc = 0.2;
let scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield = [];
let fr;
let disturbance = 1;
let magnitude = 0.5;
let c = 0;
let angle;
let disturbanceSlider, magSlider;


let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth,
    canvasHeight = canvasParent.offsetHeight;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');
    // colorMode(HSB, 255);
    cols = floor(width / scl);
    rows = floor(height / scl);
    // fr = createP('');

    flowfield = new Array(cols * rows);

    // createP('Disturbance')
    // disturbanceSlider = createSlider(0, 100, 50)
    // disturbanceSlider.value(0);

    // // createP('Magnitude')
    // magSlider = createSlider(0, 100, 50)
    // magSlider.value(0);

    for (var i = 0; i < 300; i++) {
        particles[i] = new Particle();
    }
    background(0);

    ellipse(width / 2, height / 2, 10, 10)
    // frameRate(20)
}


let i = 0;
function draw() {

    background(0, 20);

    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;


            if (emotion === 'happy') {
                angle = sin(noise(xoff, yoff, zoff)) * TWO_PI * 0.3;
            } else {
                angle = sin(xoff, yoff, zoff) * 0.3;
            }

            var v = p5.Vector.fromAngle(angle);
            // v.setMag(magnitude);
            flowfield[index] = v;
            xoff += inc;
            // stroke(255);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, scl, 0);
            // pop();
            c = map(disturbance, 15, 20, 0, 255)
        }
        yoff += inc / 2;

        zoff += disturbance * 0.002;
    }


    // console.log(r)

    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show(c);
    }

}
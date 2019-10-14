const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  var constraints = { audio: false, video: { width: 1280, height: 720 } };
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
      var video = document.querySelector('video');
      video.srcObject = mediaStream;
    })
}

let expressions = {}
const videoSection = document.querySelector('.video')

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  videoSection.append(canvas)

  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    // faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

    return expressions = detections[0].expressions

  }, 500)

})

let canvasParent = document.getElementById('p5Sketch'),
  canvasWidth = canvasParent.offsetWidth,
  canvasHeight = canvasParent.offsetHeight;
console.log(canvasWidth)


let s = 0, inc = 0;
function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight)
  canvas.parent('p5Sketch')
  background(255)
}

function draw() {
  clear()

  ellipse(width / 2, height / 2, 20, 20)

  for (let y = 0; y < 50; y++) {

    if (expressions.happy > 0.1) {
      s = map(sin(expressions.happy + y + inc), -1, 1, -40, 40)
    } else if (expressions.sad > 0.1) {
      s = map(noise(inc + y), 0, 1, -40, 40)
    } else {
      s = map(cos(inc + y), -1, 1, -10, 10)
    }


    ellipse(width / 2 + s, height - 100 - y * 5, 10, 10)

  }
  inc += 0.02
}

// Oliver Meredith
// https://www.olivermeredith.com/

// let canvasParent = document.getElementById('p5Sketch'),
//   canvasWidth = canvasParent.offsetWidth;


// let inc = 0.2;
// let scl = 10;
// let cols, rows;
// let zoff = 0;
// let particles = [];
// let flowfield = [];
// let fr;
// let disturbance = 1;
// let magnitude = 0.5;
// let c = 0;

// let disturbanceSlider, magSlider;

// let emotions = {
//   noPerson: true,
//   neutral: false,
//   happy: false,
//   angry: false,
//   surprised: false,
//   sad: false
// }
// function setup() {
//   var canvas = createCanvas(canvasWidth, canvasWidth);
//   canvas.parent('p5Sketch');
//   // colorMode(HSB, 255);
//   cols = floor(width / scl);
//   rows = floor(height / scl);
//   fr = createP('');

//   flowfield = new Array(cols * rows);

//   createP('Disturbance')
//   disturbanceSlider = createSlider(0, 100, 50)
//   disturbanceSlider.value(0);

//   createP('Magnitude')
//   magSlider = createSlider(0, 100, 50)
//   magSlider.value(0);

//   for (var i = 0; i < 300; i++) {
//     particles[i] = new Particle();
//   }
//   background(0);
// }

// function draw() {
//     background(0, 20);
//     disturbance = map(disturbanceSlider.value(), 0, 100, 0.1, 5)
//     magnitude = map(magSlider.value(), 0, 100, 0.5, 25)

//     var yoff = 0;
//     for (var y = 0; y < rows; y++) {
//         var xoff = 0;
//         for (var x = 0; x < cols; x++) {
//             var index = x + y * cols;

//             let angle = sin(xoff, yoff, zoff) * 0.3;

//             if (!emotions.noPerson) {
//                 angle = sin(noise(xoff, yoff, zoff)) * TWO_PI * 0.5;
//             }
//             if (!emotions.noPerson && emotions.angry === true) {
//                 // console.log("Angry")
//                 angle = noise(xoff, yoff, zoff) * TWO_PI * 3
//             }

//             var v = p5.Vector.fromAngle(angle);
//             // v.setMag(magnitude);
//             flowfield[index] = v;
//             xoff += inc;
//             // stroke(255);
//             // push();
//             // translate(x * scl, y * scl);
//             // rotate(v.heading());
//             // strokeWeight(1);
//             // line(0, 0, scl, 0);
//             // pop();
//             c = map(disturbance, 15, 20, 0, 255)
//         }
//         yoff += inc / 2;

//         zoff += disturbance * 0.002;
//     }


//     // console.log(r)

//     for (var i = 0; i < particles.length; i++) {
//         particles[i].follow(flowfield);
//         particles[i].update();
//         particles[i].edges();
//         particles[i].show(c);
//     }

// }

// function Particle() {
//   this.pos = createVector(random(width), height / 2 - 20 + random(40));
//   this.vel = createVector(0, 0);
//   this.acc = createVector(0, 0);
//   this.maxspeed = 1;
//   this.h = 0;

//   this.prevPos = this.pos.copy();

//   this.update = function () {
//       this.vel.add(this.acc);
//       this.vel.limit(this.maxspeed);
//       this.pos.add(this.vel);
//       this.acc.mult(0);
//   }

//   this.follow = function (vectors) {
//       var x = floor(this.pos.x / scl);
//       var y = floor(this.pos.y / scl);
//       var index = x + y * cols;
//       var force = vectors[index];
//       this.applyForce(force);
//   }

//   this.applyForce = function (force) {
//       this.acc.add(force);
//   }

//   this.show = function (c) {
//       // if (r > 150) console.log(r, g, b)
//       stroke(255, 255 - c, 255 - c, 255);
//       // stroke(this.h, 255, 255);
//       // this.h = this.h + 1;
//       // if (this.h > 255) {
//       //     this.h = 200;
//       // }
//       strokeWeight(0.5);
//       line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
//       this.updatePrev();
//   }

//   this.updatePrev = function () {
//       this.prevPos.x = this.pos.x;
//       this.prevPos.y = this.pos.y;
//   }

//   this.edges = function () {
//       if (this.pos.x > width) {
//           this.pos.x = 0;
//           this.updatePrev();
//       }
//       if (this.pos.x < 0) {
//           this.pos.x = width;
//           this.updatePrev();
//       }
//       if (this.pos.y > height) {
//           this.pos.y = 0;
//           this.updatePrev();
//       }
//       if (this.pos.y < 0) {
//           this.pos.y = height;
//           this.updatePrev();
//       }

//   }

// }
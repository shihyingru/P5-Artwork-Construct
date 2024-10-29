//https://www.artsy.net/artwork/vera-molnar-interstices-4
//Other Practice Artwork Reference

//https://www.nyartbeat.com/event/2015/0A0C

//Publication: https://www.matmutpourlesarts.fr/centre-art-contemporain/expositions/14/vera-molnar
//https://www.navigart.fr/fracbr/artwork/vera-molnar-a-la-recherche-de-paul-klee-350000000001434

/*
 * bleeding > 9:1
 */

var rows = 10;
var cols = 10;

let gridWidth = 50;
let gridHeight = 50;
var bleeding;

//rgba(137,109,130,255)
let colors = ["#896d82"];

function setup() {
  bleeding = (rows * gridWidth * 0.1) / 2;
  createCanvas(
    rows * gridWidth + bleeding * 2,
    cols * gridHeight + bleeding * 2,
    WEBGL
  );
  background(255);
  frameRate(60);

  //Draw Rect
  // translate(-width / 2, -height / 2);
}

function draw() {
  noStroke();
  translate(-width / 2, -height / 2);

  // brush.box() returns an array with available brushes
  let available_brushes = brush.box();

  // Set the stroke to a random brush, color, and weight = 1
  // brush.set("spray", "#896d82", 1);

  // Draw a random flowLine (x, y, length, direction)
  // brush.flowLine(
  //   random(width),
  //   random(height),
  //   random(300, 800),
  //   random(0, 360)
  // );

  // Set the stroke to a random brush, color, and weight = 1
  // brush.set(random(available_brushes), random(colors), 1);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      blender.color("#896d82", 170);
      let x = i * gridWidth + gridWidth / 2 + random(-10, 10) + bleeding;
      let y = j * gridHeight + gridHeight / 2 + random(-10, 10) + bleeding;

      //P5 Brush Version
      brush.noStroke();
      brush.set("charcoal", "#896d82", 1);
      brush.fill("#896d82", 110);
      brush.rect(x, y, gridWidth, gridHeight, CENTER);

      //P5 Color Blend Version
      blender.color("#896d82", 170);
      rect(x, y, gridWidth, gridHeight);
    }
    blender.noBlend();
    noLoop();
  }
}

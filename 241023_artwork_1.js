/*
 * Reference Artwork
 * Vera Molnar Interstices, 1986
 * 
 * Reference Artwork Url
 * https://www.artsy.net/artwork/vera-molnar-interstices-4
 *
 */
var rows = 10;
var cols = 10;

let gridWidth = 50;
let gridHeight = 50;
var bleeding; //bleeding > 9:1

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
}

function draw() {
  noStroke();
  translate(-width / 2, -height / 2);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      blender.color("#896d82", 170);
      let x = i * gridWidth + gridWidth / 2 + random(-10, 10) + bleeding;
      let y = j * gridHeight + gridHeight / 2 + random(-10, 10) + bleeding;

      //P5 Brush Version
      // brush.noStroke();
      // brush.set("charcoal", "#896d82", 1);
      // brush.fill("#896d82", 110);
      // brush.rect(x, y, gridWidth, gridHeight, CENTER);

      //P5 Color Blend Version
      blender.color("#896d82", 170);
      rect(x, y, gridWidth, gridHeight);
    }
    blender.noBlend();
    noLoop();
  }
}

// Save the image with different options when the user presses a key.
function keyPressed() {
  if (key === 's') { // Saves the canvas as an image by default
    save('241029_Vera Molnar_Interstice_1986.jpg');
  } else if (key === 'j') {
    // img.save('rockies.jpg');
  }
}
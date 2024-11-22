/**
 * Reference Artwork
 * Frieder Nake
 * Sets of straight lines Nr. 2 (12/7/65), 1965
 *
 * Reference Artwork Url
 * https://www.rightclicksave.com/article/an-interview-with-frieder-nake
 * 
*/

let canvasWidth = 600;
let canvasHeight = 600;
var utils;

var bleeding;

var degree = 0;
var translationX = 0;
var translationY = 0;

function setup() {
  bleeding = width * 0.1 / 2;
  utils = new Utils(canvasWidth, canvasHeight, bleeding);
  utils.createCanvasWithWebGL();
}

function draw() {
  frameRate(10);
  background(240);
  resetMatrix();

  strokeCap(ROUND);
  rectMode(CORNER);
  angleMode(DEGREES);

  let lineCount = 130;
  for (let i = 0; i < lineCount; i++) {
    rotate(degree);
    degree += 0.009;

    var tempX;
    var tempY;
    strokeWeight(1.5);
    if (i > lineCount * 0.8) {
      translate(translationX, 8);
      translationX -= 0.14;
      translationY -= 4;
      stroke("#000000")
      line(width / 4, 0, random(height / 3.5, height / 4), random(-height / 6, -height / 2));
      if (i > lineCount * 0.95 && i % 2 == 0) {
        stroke("#f2d739");
        for (let j = 0; j < 3; j++) {
          line(width / 4 + i * random(0.08, 0.09), i * random(0.5, 0.7), random(width / 3.5, width / 4) + (i * random(0.08, 0.09)), random(-height / 6, -height / 2) + (i * random(0.5, 0.7)));
          tempX = -random(width / 3.5, width / 4) +width / 5.5;
          tempY = (i * random(1, 1.8));
        }
      }
    } else {
      line(width / 4, 0, random(height / 3.5, height / 6), random(-height / 6, -height / 2));
      if (i > lineCount * 0.1 && i < lineCount * 0.7 && i % 2 == 0) {
        strokeWeight(0.8);
        line(width / 4, random(height / 3.5, height / 8), random(height / 3.5, height / 6), random(-height / 3, -height / 8));
      }
    }
  }

  resetMatrix();
  degree = 0;
  for (let k = 0; k < 15; k++) {
    var randomPosition = k * random(5, 10);
    rotate(degree);
    degree += 0.009;
    line(-width/2.5 + random(10,50),height/6+ random(10,20), tempX + randomPosition, tempY);
  }

  noLoop();
}

function keyPressed(){
  if(key === 's')
    utils.saveImg('20241122_artwork_5.jpg');
}
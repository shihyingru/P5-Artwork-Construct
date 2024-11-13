/**
* Reference Artwork
* Frieder Nake
* Boxes with rectangular hatchings Nr. 6 (02/09/1965), 1965.
*
* Reference Artwork Url
* https://www.rightclicksave.com/article/an-interview-with-frieder-nake
*
* https://drawwow.com/crosshatching/
*/

let canvasWidth = 600;
let canvasHeight = 400;
var utils;
var bleeding;
let gridOrientation = ["horizontal", "vertical"];

var gridCount; //Rectangle Grid Count
var drawOrientation; //Each Grid's orientation
var length; //Line Length in grid
var gap; //The gap distance between lines
var count; //Line Count in each grid

//The grid's start position X & Y
var startX;
var startY;

function setup() {
    bleeding = width * 0.1 / 2;
    utils = new Utils(canvasWidth, canvasHeight, bleeding);
    utils.createCanvasWithWebGL();
}

function draw() {
    background(240);
    gridCount = random(35, 60);
    resetRandomSeed();

    for (let i = 0; i < gridCount; i++) {
        resetMatrix();
        translate(-width / 2 + bleeding, -height / 2 + bleeding);

        if (random() > 0.5)
            stroke("#000000");
        else
            stroke("#aa0000");
        for (let j = 0; j < count; j++) {
            if (drawOrientation === "horizontal") {
                line(startX, startY, startX + length, startY);
                translate(0, gap);
            } else {
                line(startX, startY, startX, startY + length);
                translate(gap, 0);
            }
        }
        resetRandomSeed();
    }
    noLoop();
}

/**
 * Resets the random seed for generating the grid pattern.
 * This function is called to randomize the parameters of the grid,
 * such as the starting position, orientation, line length, gap, and count.
 */
function resetRandomSeed() {
    drawOrientation = random(gridOrientation);
    length = random(width / 5, width / 35);
    gap = random(width / 560, width / 250);
    count = random(10, 20);

    startX = random(bleeding, width - bleeding - (length + gap*count));
    startY = random(bleeding, height - bleeding - (length + gap*count));
}

function keyPressed(){
    if(key === "s")
        utils.saveImg("20241113_Boxes with rectangular hatchings.jpg");
}
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

let hatchingType = ["none", "single", "crossing", "right-slash", "left-slash", "dense-slash"];

const r = 200;
const lineWidth = 5;
const lines = (r * 2) / lineWidth;

function setup() {
    bleeding = width * 0.1 / 2;
    utils = new Utils(canvasWidth, canvasHeight, bleeding);
    utils.createCanvasWithWebGL();
}

function draw() {
    background(240);
    gridCount = random(35, 60);
    resetRandomSeed();

    // 1.Random Lines grid
    drawRandonLine();

    // 2.Square
    // let rectNum = 7;
    // let rectRatio = (width - ((rectNum + 1) * 20)) / rectNum; //Rectangle
    // translate(-width / 2 + bleeding, -height / 2 + bleeding);
    // for (let i = 0; i < rectNum; i++) {
    //     noFill();
    //     rectMode(CENTER);
    //     rect(rectRatio / 2 + 20, height / 2, rectRatio, rectRatio);

    //     var lineCount = 12;
    //     var lineGap = rectRatio / lineCount;
    //     if (i == 1) {
    //         drawCrossHatching(rectRatio, lineCount, lineGap, "single");
    //     } else if (i == 2) {
    //         drawCrossHatching(rectRatio, lineCount, lineGap, "crossing");
    //     } else if (i == 3) {
    //         var tempLineCount = 18;
    //         var tempLineGap = rectRatio / tempLineCount;
    //         drawCrossHatching(rectRatio, tempLineCount, tempLineGap, "crossing");
    //     } else if (i == 4) {
    //         var tempLineCount = 18;
    //         var tempLineGap = rectRatio / tempLineCount;
    //         drawCrossHatching(rectRatio, tempLineCount, tempLineGap, "right-slash");
    //     } else if (i == 5) {
    //         var tempLineCount = 18;
    //         var tempLineGap = rectRatio / tempLineCount;
    //         drawCrossHatching(rectRatio, tempLineCount, tempLineGap, "left-slash");
    //     } else if (i == 6) {
    //         var tempLineCount = 20;
    //         var tempLineGap = rectRatio / tempLineCount;
    //         drawCrossHatching(rectRatio, tempLineCount, tempLineGap, "dense-slash");
    //     }
    //     translate(rectRatio + 20, 0);
    // }

    // 3.Lines in circle
    // translate(-width / 2 + bleeding, -height / 2 + bleeding);
    // for (var i = 0; i <= lines / 2 -15; i++) {
    //     const s = (i * lineWidth) + lineWidth;
    //     const chordLength = (Math.sqrt((2 * s * r) - (s * s)) * 2);
    //     //Vertical Line
    //     line(i * lineWidth, r - (chordLength / 2), i * lineWidth, r - (chordLength / 2) + chordLength);
    //     //Horizontal Line
    //     line(r - (chordLength / 2), i * lineWidth, r - (chordLength / 2) + chordLength, i * lineWidth);
    //     //right slash
    //     // line(r - (chordLength / 2), r - (chordLength / 2), i * lineWidth, i * lineWidth);
    //     //Left Slash
    //     line(r - (chordLength / 2) + chordLength, i * lineWidth, i * lineWidth, i * lineWidth);
    // }

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

    startX = random(bleeding, width - bleeding - (length + gap * count));
    startY = random(bleeding, height - bleeding - (length + gap * count));
}

function drawRandonLine() {
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
}

function drawCrossHatching(rectRatio, lineCount, lineGap, hatchingType) {
    var tempLineCount = lineCount;
    var tempLineGap = lineGap;
    for (let j = 0; j < tempLineCount; j++) {
        line((j * tempLineGap) + 20, height / 2 - rectRatio / 2, (j * tempLineGap) + 20, height / 2 - rectRatio / 2 + rectRatio);

        if (hatchingType == "crossing")
            line(20, height / 2 - rectRatio / 2 + (j * tempLineGap), 20 + rectRatio, height / 2 - rectRatio / 2 + (j * tempLineGap));

        //右斜線群
        if (hatchingType == "right-slash" || hatchingType == "left-slash" || hatchingType == "dense-slash") {
            line((j * tempLineGap) + 20, height / 2 - rectRatio / 2, 20, height / 2 - rectRatio / 2 + (j * tempLineGap));
            line((j * tempLineGap) + 20, height / 2 - rectRatio / 2 + rectRatio, 20 + rectRatio, height / 2 - rectRatio / 2 + (j * tempLineGap));
        }

        //左斜線群
        if (hatchingType == "left-slash" || hatchingType == "dense-slash") {
            line((j * tempLineGap) + 20, height / 2 - rectRatio / 2, rectRatio + 20, height / 2 + rectRatio / 2 - (j * tempLineGap));
            line(20, height / 2 - rectRatio / 2 + (j * tempLineGap), rectRatio + 20 - (j * tempLineGap), height / 2 + rectRatio / 2);
        }
    }
}

function keyPressed() {
    if (key === "s")
        utils.saveImg("20241113_Boxes with rectangular hatchings.jpg");
}
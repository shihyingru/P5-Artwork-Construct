/*
 * Reference Artwork
 * Vera Molnár Mouvement, 1959
 * 
 * Reference Artwork Url
 * https://ropac.net/artists/231-vera-molnar/works/12824-vera-molnar-mouvement-1959/
 *
 */

let rectCount = 11;
let rectWidth = 12;
let rectBleeding = 10;
var bleeding; //bleeding > 9:1
//rgba(19,93,164,255)
let colors = ["#135da4", "#000000"];
//#f0e4d4(rgba(240,228,212,255))
let bgColor = "#f0e4d4";
let frames = 60;

function setup() {
    bleeding = (rectWidth + (rectBleeding * 2)) * rectCount * 0.1 / 2;
    let canvasWidth = (rectWidth + (rectBleeding * 2)) * rectCount + bleeding * 2;
    let canvasHeight = canvasWidth / 1.3;
    createCanvas(canvasWidth, canvasHeight, WEBGL);
    // frameRate(2);
}

function draw() {
    background(bgColor);
    translate(-width / 2, -height / 2);

    let rectPoint = bleeding + rectBleeding;
    let rectColor;
    for (let i = 0; i < rectCount; i++) {
        if (i % 2 == 0)
            rectColor = colors[0];
        else
            rectColor = colors[1];

        //Main Rect Line
        fill(rectColor);
        noStroke();
        rect(rectPoint, bleeding, rectWidth, height - (bleeding * 2));

        //Arc Section Cut Rect Line
        let arcRadius = rectWidth + rectBleeding + 10;
        let randomArcY = random(bleeding + arcRadius, height - bleeding - arcRadius);
        noStroke();
        fill(bgColor);
        rect(rectPoint, randomArcY - (rectWidth + rectBleeding) / 2, rectWidth, rectWidth + rectBleeding);

        //Random Position Arc on Main Rect Line
        strokeCap(SQUARE);
        strokeWeight(rectWidth);
        stroke(rectColor);
        arc(rectPoint, randomArcY, arcRadius, rectWidth + rectBleeding + 10, -HALF_PI, HALF_PI);

        //Interval of Main Rect Line
        rectPoint += rectWidth + (rectBleeding * 2);
    }
    noLoop();
}

// Save the image with different options when the user presses a key.
function keyPressed() {
    // console.log(key);
    if (key === 's') { // Saves the canvas as an image by default
        save('241101_Vera Molnar_Mouvement_1959.jpg');
    } else if (key === 'a') {
        const options = { units: "frames", delay: 0 };
        saveGif('test.gif', frames, options);
    }
}
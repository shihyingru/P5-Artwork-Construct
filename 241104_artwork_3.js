/*
* Reference Artwork
* Parcours à angles droit, 1997
* Parcours à Angles Droits No.2, 1997
*
* Reference Artwork Url
* https://www.artsy.net/artwork/vera-molnar-parcours-a-angles-droits-no-dot-2
* https://www.artsy.net/artwork/vera-molnar-parcours-a-angles-droit
* 
*/

var utils;
let canvas = 400;
let rows = 5, cols = 5;
let rule = [4, 6, 8, 10, 12]; //gap
var bleeding;
var bgColor = ["#000000", "ffffff"];

function setup() {
    bleeding = canvas * 0.1 / 2;
    utils = new Utils(canvas + (rows - 1) * 10, canvas + (rows - 1) * 10, bleeding);
    utils.createCanvasWithWebGL();
}

function draw() {
    let color = random(bgColor);
    background(color);
    translate(-width / 2 + bleeding, -height / 2 + bleeding);
    if (color === "#000000")
        stroke('#ffffff');
    else
        stroke('#000000');
    strokeWeight(1);

    var grid = canvas / rows; //fix num
    var gridRatio = canvas / rows;
    var gap = gridRatio / random(rule);
    var gridIndex = 0;
    var index = 0;

    for (let i = 0; i < rows; i++) {
        for (let k = 0; k < cols; k++) {
            var shield = false; //For gap line
            for (let j = gridIndex; j <= gridRatio; j = j + gap) { //Draw a Grid
                if ((i % 2 == 0 && k % 2 == 0) || (i % 2 != 0 && k % 2 != 0)) { //Vertical grid
                    line(j, index, j, index + grid);
                    if (j < gridRatio) {
                        if (shield) {
                            line(j, index, j + gap, index);
                        } else {
                            line(j, index + grid, j + gap, index + grid);
                        }
                        shield = !shield;
                    }

                    //The line to connet each column
                    if (j == gridRatio && k < cols - 1)
                        line(j, index + grid, j + 10, index + grid);
                } else { //Horizontal Grid
                    line(index, j, index + grid, j);
                    if (j + gap <= gridRatio) {
                        if (shield) {
                            line(index + grid, j, index + grid, j + gap);
                        } else {
                            line(index, j, index, j + gap);
                        }
                        shield = !shield;
                    }

                    //左右排連接
                    if (j == gap - gap && k < cols - 1) {
                        line(index + grid, j, index + grid + 10, j);
                    }
                }

                //上下排連接
                if (j == gridRatio && k == cols - 1 && (i % 2 == 0 && i < rows - 1)) {
                    line(j, index + grid, j, index + grid + 10);
                }

                if (j == gridRatio - grid && k == 0 && i % 2 != 0) {
                    line(j, index + grid, j, index + grid + 10);
                }
            }
            gap = grid / random(rule);
            //Move right to complete next grid
            translate(grid + 10, 0);
        }
        //Move down to complete next grid
        translate(-width + ((rows - 2) * 10), grid + 10);
    }
    noLoop();
}

function keyPressed() {
    if (key === 's')
        utils.saveImg('20241108_Parcours à angles droit.jpg');
    else if (key === 'a')
        redraw();
}
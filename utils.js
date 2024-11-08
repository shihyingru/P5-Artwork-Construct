class Utils {
  //Current for same equal proportions
  constructor(contentWidth, contentHeight, bleeding) {
    this.contentWidth = contentWidth;
    this.contentHeight = contentHeight;
    this.bleeding = bleeding;
  }

  //bleeding > 9:1
  //Create Canvas with Bleeding Ratio & WEBGL
  createCanvasWithWebGL() {
    createCanvas(this.contentWidth + this.bleeding * 2, this.contentHeight + this.bleeding * 2, WEBGL);
  }

  //Create Canvas with Bleeding Ratio
  createCanvas() {
    createCanvas(this.contentWidth + this.bleeding * 2, this.contentHeight + this.bleeding * 2);
  }

  //Save Image File
  saveImg(fileName) {
    save(fileName);
  }

  //Save GIF File
  saveGif(fileName) {
    const options = { units: "frames", delay: 0 };
    saveGif(fileName, frames, options);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  window_min_size = min(windowWidth, windowHeight); // update this each time window is resized
}
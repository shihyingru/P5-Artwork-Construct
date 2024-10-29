class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes
  constructor(){
    this.x = random(-width/2, width/2);
    this.y = random(-width/2, height/2);
    this.r = random(dot_size/2, dot_size);
    this.xSpeed = random(-temperature, temperature);
    this.ySpeed = random(-temperature, temperature);
  }
 
  // creation of a particle
  showParticle() {
    circle(this.x, this.y, this.r);
  }

  // setting the particle in motion
  moveParticle() {
    if(this.x < -width/2 || this.x > width/2)
      this.xSpeed *= -1;
    if(this.y < -height/2 || this.y > height/2)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
 
  // add forces between particles closer than certian distance
  attractParticles(idx, particles) {
    let has_attraction = false;
    
    particles.forEach(element => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < join_distance) {
        has_attraction = true;
        let pos_vec = createVector(this.x, this.y);
        let target_vec = createVector(element.x, element.y);
        
        let join_vec = p5.Vector.sub(target_vec, pos_vec);
        join_vec.setMag(join_attraction);
        
        this.xSpeed += join_vec.x;
        this.ySpeed += join_vec.y;
      } 
    });
    
  }
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  window_min_size = min(windowWidth, windowHeight); // update this each time window is resized
}
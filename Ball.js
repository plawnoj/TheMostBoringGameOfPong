class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.r = 20;

    this.reset();
  }

  checkLeftCollisions(p) {
    if (this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2) {
      if (this.x > p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.h, -rad, rad);
        this.xspeed = 15 * cos(angle);
        this.yspeed = 15 * sin(angle);
        this.x = p.x + p.w / 2 + this.r;
      }
    }
  }

  checkRightCollisions(p) {
    if (this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x + this.r > p.x - p.w / 2) {

      if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let angle = map(diff, 0, p.h, radians(225), radians(135));
        this.xspeed = 15 * cos(angle);
        this.yspeed = 15 * sin(angle);
        this.x = p.x - p.w / 2 - this.r;
      }
    }
  }

  edges(){
    if (this.y < 0 || this.y > height){
      this.yspeed *= -1;
    }
    if (this. x - this.r > width){
      leftScore++;
      this.reset();
    }
    if (this.x + this.r < 0){
      rightScore++;
      this.reset();
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    let angle = random(-PI / 4, PI / 4);
    this.xspeed = 15 * Math.cos(angle);
    this.yspeed = 15 * Math.sin(angle);

    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }

  show() {
    fill(250);
    noStroke();
    ellipse(this.x, this.y, this.r);
  }
}
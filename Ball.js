class Ball {
    constructor(x, y) {
      var options = {
        'density':1,
        'frictionAir': 0.005
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      rectMode(CENTER)
      ellipse(0, 0, this.width, this.height);
      pop();
    };
  };
  
/*
Bouncing Balls by Rob Glazebrook
An update of my earlier Pen which did something similar using DOM elements. This is my first foray into using sketch.js.
*/

var particles = [],
    particleCount = 200;
    Particle = function(x,y) {
      this.x = x;
      this.y = y;
      this.radius = random(3,30);
      this.rgba = 'rgba('+floor(random(0,255))+','+floor(random(0,255))+','+floor(random(0,255))+','+random(.1,.8)+')';
      this.vx = random(-2,2);
      this.vy = random(-2,2);

      // Draw our particle to the canvas.
      this.draw = function(ctx) {
        ctx.fillStyle = this.rgba;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,TWO_PI);
        ctx.fill();
      };

      // Update our position.
      this.update = function(ctx) {
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off edges.
        if(this.x + this.radius > ctx.width) {
          this.vx *= -1;
          this.x = ctx.width - this.radius;
        }
        if(this.x - this.radius < 0) {
          this.vx *= -1;
          this.x = this.radius;
        }
        if(this.y + this.radius > ctx.height) {
          this.vy *= -1;
          this.y = ctx.height - this.radius;
        }
        if(this.y - this.radius < 0) {
          this.vy *= -1;
          this.y = this.radius;
        }
      }
    };

var sketch = Sketch.create({
  setup: function() {
    var i = particleCount;
    while(i--) {
      var p = new Particle(random(0, this.width),random(0, this.height));
      particles.push(p);
    }
  },
  update: function() {
    var i = particleCount;
    while(i--) {
      particles[i].update(this);
    }
  },
  draw: function() {
    var i = particleCount;
    while(i--) {
      particles[i].draw(this);
    }
  }
});

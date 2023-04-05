//npm i jest
//npm i inquirer@8.2.4

class Circle {
    constructor(x, y, radius, color, ctx) {
      this.x = x; // x-coordinate of the center of the circle
      this.y = y; // y-coordinate of the center of the circle
      this.radius = radius; // radius of the circle
      this.color = color; // fill color of the circle
      this.ctx = ctx; // canvas 2d context
    }
  
    draw() {
      // Begin path for the circle
      this.ctx.beginPath();
      // Draw the circle
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      // Set fill color for the circle
      this.ctx.fillStyle = this.color;
      // Fill the circle
      this.ctx.fill();
    }
  }
  

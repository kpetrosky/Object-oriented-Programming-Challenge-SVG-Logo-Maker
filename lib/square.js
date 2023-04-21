//same as circle.js
const Shape = require("./shape");
class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return `<rect x="150" y="120" rx="10" ry="10" width="400" height="400" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }
}
module.exports = Square;


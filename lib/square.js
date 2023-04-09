//same as circle.js
const Shape = require("./shape");
class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }
}
module.exports = Square;


const Shape = require("./shape");
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return `<circle cx="150" cy="125" r="100" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }
}
module.exports = Circle;
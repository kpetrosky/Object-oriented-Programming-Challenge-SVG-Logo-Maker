const Shape = require("./shape");
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return `<circle cx="25" cy="75" r="20" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }
}
module.exports = Circle;
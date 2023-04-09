//same as circle.js
const Shape = require("./shape");

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    
    render() {
        return `<svg height="210" width="500">\n    <polygon points="200,10 250,190 160,210" stroke="${this.color}" fill="${this.color}"/>\n  </svg>`;
    }
}

module.exports = Triangle;

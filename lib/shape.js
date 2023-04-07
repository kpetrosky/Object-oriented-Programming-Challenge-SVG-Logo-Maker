class Shape {
    constructor(color) {
        this.color = color;
//this=closet object, assigning shape.color value
    };
    setColor(color) {
        this.color = color;
    }
}
module.exports = Shape;
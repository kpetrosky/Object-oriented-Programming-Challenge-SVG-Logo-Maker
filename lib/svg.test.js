const SVG = require("./svg");
const Circle = require("./circle");

// test('test method to be updated with color', () => {
//     const svg = new SVG("blue");
//     svg.setColor("red");
//     expect(svg.color).toBe("red");
// });

test('test method to be updated with render', () => {
    const circle = new Circle ("blue")
    const shape = circle.render();
    const svg = new SVG(shape, "SVG");
    expect(svg.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" stroke="blue" fill="blue" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text> </svg>`);
});

module.exports = SVG;



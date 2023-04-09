//same as circle.test.js
const Triangle = require("./triangle");

test('test method to be updated with color', () => {
    const triangle = new Triangle("blue");
    triangle.setColor("red");
    expect(triangle.color).toBe("red");
});

test('test method to be updated with render', () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toBe('<svg height="210" width="500">\n    <polygon points="200,10 250,190 160,210" stroke="' + triangle.color + '" fill="' + triangle.color + '"/>\n  </svg>');
});

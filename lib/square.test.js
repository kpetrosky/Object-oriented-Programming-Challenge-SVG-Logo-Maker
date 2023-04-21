const Square = require("./square");

test('test method to be updated with color', () => {
    const square = new Square("blue");
    square.setColor("red");
    expect(square.color).toBe("red");
});

test('test method to be updated with render', () => {
    const square = new Square("blue");
    expect(square.render()).toBe('<rect x="150" y="120" rx="10" ry="10" width="400" height="400" stroke="' + square.color + '" fill="' + square.color + '" stroke-width="5"/>');
});
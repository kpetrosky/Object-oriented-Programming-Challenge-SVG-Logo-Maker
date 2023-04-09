const Square = require("./square");

test('test method to be updated with color', () => {
    const square = new Square("blue");
    square.setColor("red");
    expect(square.color).toBe("red");
});

test('test method to be updated with render', () => {
    const square = new Square("blue");
    expect(square.render()).toBe('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="' + square.color + '" fill="' + square.color + '" stroke-width="5"/>');
});
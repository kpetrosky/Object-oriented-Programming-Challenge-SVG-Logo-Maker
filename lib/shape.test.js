const Shape = require("./shape");
test('test set method with updated color', () => {
    const shape = new Shape("blue");
    shape.setColor("red");
    expect(shape.color).toBe("red");
  });
  //testing all methods
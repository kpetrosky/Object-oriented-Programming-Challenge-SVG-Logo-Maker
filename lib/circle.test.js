const Circle = require("./circle");
//classes need to begin with cap
test('test method to be updated with color', () => {
    const circle = new Circle("blue");
    circle.setColor("red");
    expect(circle.color).toBe("red");

})
    

test('test method to be updated with render', () => {
    const circle = new Circle("blue");
    expect(circle.render()).toBe(`<circle cx="150" cy="125" r="100" stroke="blue" fill="blue" stroke-width="5"/>`)


}
)




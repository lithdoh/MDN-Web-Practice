// Task 1
class Shape {

    name;
    sides;
    sideLength;
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    };

    calcPerimeter(sides, sideLength) {
        console.log(`${this.name}'s perimeter is ${this.sides * this.sideLength}`);
    };
};

const square = new Shape("Square", 4, 5);
const triangle = new Shape("triangle", 3, 3);
square.calcPerimeter();
triangle.calcPerimeter();

// Task 2
class Shape {
    name;
    sides;
    sideLength;
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    };
  
    calcPerimeter(sides, sideLength) {
      console.log(`${this.name}'s perimeter is ${this.sides*this.sideLength}`);
    };
  };
  
  class Square extends Shape {
    constructor(sideLength) {
      super('square', 4, sideLength);
    };
    calcArea(sides) {
      console.log(`The area of ${this.name} is ${this.sideLength*this.sideLength}`);
    };
  };
  
  const square = new Square("default", 3, 6);
  square.calcPerimeter();
  square.calcArea();
      
// Task 3

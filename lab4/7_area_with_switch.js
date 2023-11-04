const rectangleArea = (a, b) => a * b;
const trapezeArea = (a, b, h) => ((a + b) * h) / 2;
const parallelogramArea = (a, h) => a * h;
const triangleArea = (a, h) => (a * h) / 2;

// Shape: rectangle, trapeze, parallelogram, triangle
function area(shape, a, b, h) {
  switch (shape) {
    case "rectangle":
      return rectangleArea(a, b);
    case "trapeze":
      return trapezeArea(a, b, h);
    case "parallelogram":
      return parallelogramArea(a, h);
    case "triangle":
      return triangleArea(a, h);
    default:
      throw new Error("Invalid shape");
  }
}

console.log(area("rectangle", 2, 3)); // 6
console.log(area("trapeze", 2, 3, 4)); // 10
console.log(area("parallelogram", 2, undefined, 4)); // 8
console.log(area("triangle", 2, undefined, 4)); // 4

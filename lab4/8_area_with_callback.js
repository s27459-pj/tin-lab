// 8. Napisz funkcję liczącą pole wybranej figury (prostokąt,
// trapez, równoległobok, trójkąt) bez użycia instrukcji
// warunkowej (bez if, switch, pętli). Wykorzystaj funkcje
// anonimowe i callback.

function area(callback, a, b, h) {
  return callback(a, b, h);
}

const rectangleArea = (a, b) => a * b;
const trapezeArea = (a, b, h) => ((a + b) * h) / 2;
const parallelogramArea = (a, h) => a * h;
const triangleArea = (a, h) => (a * h) / 2;

console.log(area(rectangleArea, 2, 3)); // 6
console.log(area(trapezeArea, 2, 3, 4)); // 10
console.log(area(parallelogramArea, 2, 4)); // 8
console.log(area(triangleArea, 2, 4)); // 4

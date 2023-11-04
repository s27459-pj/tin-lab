function pythagoreanTriple(a, b, c) {
  return a * a + b * b === c * c;
}

console.log(pythagoreanTriple(3, 4, 5)); // true
console.log(pythagoreanTriple(3, 5, 7)); // false
console.log(pythagoreanTriple(12, 5, 13)); // true
console.log(pythagoreanTriple(12, 5, 14)); // false

function pythagoreanTriple(a, b, c) {
  return (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  );
}

console.log(pythagoreanTriple(3, 4, 5)); // true
console.log(pythagoreanTriple(3, 5, 4)); // true
console.log(pythagoreanTriple(5, 4, 3)); // true

console.log(pythagoreanTriple(3, 5, 7)); // false
console.log(pythagoreanTriple(12, 5, 13)); // true
console.log(pythagoreanTriple(12, 5, 14)); // false

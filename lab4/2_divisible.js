function divisibleByFromRange(start, end, divisor) {
  // [ start .. end ]
  let numbers = Array.from({ length: end }, (_, k) => k + start);
  return numbers.filter((num) => num % divisor === 0);
}

console.log(divisibleByFromRange(1, 7, 2)); // [2, 4, 6]
console.log(divisibleByFromRange(1, 7, 3)); // [3, 6]
console.log(divisibleByFromRange(1, 7, 4)); // [4]
console.log(divisibleByFromRange(1, 7, 5)); // [5]
console.log(divisibleByFromRange(1, 7, 6)); // [6]
console.log(divisibleByFromRange(1, 7, 7)); // [7]
console.log(divisibleByFromRange(1, 7, 8)); // []

console.log(divisibleByFromRange(2, 8, 2)); // [2, 4, 6, 8]
console.log(divisibleByFromRange(2, 8, 3)); // [3, 6]
console.log(divisibleByFromRange(2, 8, 4)); // [4, 8]
console.log(divisibleByFromRange(2, 8, 5)); // [5]

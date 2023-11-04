function invertedTree(n) {
  /*
   * invertedTree(6);
   * *********
   * **** ****
   * ***   ***
   * **     **
   * *       *
   * *********
   */

  // Top border
  console.log("*".repeat(n * 2 - 3));
  for (let i = 2; i <= n - 1; i++) {
    console.log("*".repeat(n - i) + " ".repeat(i * 2 - 3) + "*".repeat(n - i));
  }
  // Bottom border
  console.log("*".repeat(n * 2 - 3));
}

invertedTree(6);

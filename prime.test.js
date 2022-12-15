const Prime = require("./prime");

test("the number 2 should be prime", () => {
  const prime = new Prime();
  expect(prime.isPrime(2)).toBe(true);
});

test("the number 4 should not be prime", () => {
  const prime = new Prime();
  expect(prime.isPrime(4)).toBe(false);
});

// test.each([
//   [2, true],
//   [3, true],
//   [5, true],
//   [7, true],
//   [10, false],
//   [13, true],
//   [28, false],
//   [67, true],
//   [97, true],
//   [121, false],
// ])("can decipher from prime and non prime value", (num, isAprime) => {
//   const prime = new Prime();
//   expect(prime.isPrime(num)).toBe(isAprime);
// });

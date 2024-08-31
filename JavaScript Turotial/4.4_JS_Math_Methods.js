// JavaScript Math Method

/** 1. Math.abs()
 * Returns the absolute value of a number
 */

console.log(Math.abs(-5)); // Output: 5

/** 2. Math.ceil()
 * Returns the smallest integer greater than or equal to a number
 */

console.log(Math.ceil(2.5)); // Output: 3

/** 3. Math.floor()
 * Returns the largest integer less than or equal to a number
 */

console.log(Math.floor(2.5)); // Output: 2

/** 4. Math.round()
 * Returns a number to the nearest integer
 */

console.log(Math.round(2.5)); // Output: 3

/** 5. Math.min()
 * Returns the smallest of the given number
 */

console.log(Math.min(3, 5, 1, 9, 2)); // Output: 1

/** 6. Math.max()
 * Returns the largest of the given number
 */

console.log(Math.max(3, 5, 1, 9, 2)); // Output: 9

/** 7. Math.sqrt()
 * Returns the square root of a number.
 */

console.log(Math.sqrt(16)); // Output: 4

/** 8. Math.pow()
 * Returns the result of raising a number to a power.
 */

console.log(Math.pow(2, 3)); // Output:

/** 9. Math.random()
 * Returns a random number between 0 (inclusive) and 1 (exclusive).
 */

console.log(Math.random()); // Output:

/** 10. Math.trunc()
 * Truncates the decimal part of a number, leaving only the integer part
 *
 */

console.log(Math.trunc(2.5)); // Output: 2

/** 11. Math.sign()
 * Returns the sign of an number:`1` for positive, `-1` for negative, `0` for zero
 */

console.log(Math.sign(-5)); // Output: -1
console.log(Math.sign(0)); // Output: 0
console.log(Math.sign(5)); // Output:

//Usage Example
let a = -4.7;
let b = Math.abs(a); // 4.7
let c = Math.ceil(a); // -4
let d = Math.floor(a); // -5
let e = Math.round(a); // -5
let f = Math.trunc(a); // -4
let g = Math.pow(2, 3); // 8
let h = Math.sqrt(16); // 4
let i = Math.random(); // Random number between 0 and 1

// Implicit type Coersion in JavaScript

// 1. String and Number
// When a number is added to a string, JavaScript converts the number to a string and then concatenates them.
let result = "5" + 3;
console.log(result); // 53 (number 3 is coerced into a string)
console.log(typeof result);

// 2. Boolean and Number
// When a boolean is used in a numeric context, JavaScript converts true to 1 and false to 0.

let boolResult = true + 3;
console.log(boolResult); // 4 (boolean 3 is coerced into a number)
console.log(typeof boolResult);

// 3. Equality Comparison ('==')
// The '==' operator performs type coercion if the operands are of different types before comparing them.

console.log(1 == "1"); // true (number 1 is coerced into a string)
console.log(1 == "1.0"); // true (number 1 is coerced into a string)
console.log(1 == true); // true (boolean true is coerced into a number)
console.log(false == 0); // true

// 4. Strict Equality Comparison (===)

console.log(1 === "1"); // false (types are different)
console.log(1 === "1.0"); // false (types are different)
console.log(1 === true); // false (types are different)
console.log(false === 0); // false (types are different)

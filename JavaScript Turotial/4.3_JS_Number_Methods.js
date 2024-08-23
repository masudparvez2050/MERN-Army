// JavaScript Number Methods

// 1. 'Number()'
/**
 * Comvert a value to a number.
 *
 */
var num = Number("123");
console.log(num); // Output: 123
console.log(typeof num);

// 2. 'parseInt()'
/**
 * Perses a stirng and returns an integer
 */
var num = parseInt("456.99");
console.log(num); // Output: 456

// 3. 'parseFloat()'
/**
 * parse a String and returns a floating-point number
 */

var num = parseFloat("456.789");
console.log(num); // Output: 456.789

// 4. 'toFixed()'
/**
 * Formats a number to a specified number of decimal places
 */

var num = 456.7894654564654564;
var fixedNum = num.toFixed(2);
console.log(fixedNum); // Output: 456.79

// 5. 'toString()'
/**
 * Converts a number to a string
 */

var num = 123;
var strNum = num.toString();
console.log(strNum); // Output: "123"

// 6. 'toExponential()'
/**
 *  Converts a number to exponential notation
 */

var num = 1234567890;
var expNum = num.toExponential(2);
console.log(expNum); // Output: "1.23e+9"

// 7. 'toPrecision()'
/**
 * Formats a number to a specified precision (total number of digits)
 */

var num = 123.456789;
var precNum = num.toPrecision(4);
console.log(precNum); // Output: "123.46"

// 8. 'valueOf()'
/**
 * Returns the primitive value of a Number object
 */

var num = new Number(123);
console.log(num.valueOf()); // Output: 123

// 9. 'isInteger()'
/**
 * Returns true if the number is an integer
 */

var num = 123;
console.log(Number.isInteger(num)); // Output: true

// 10. 'isNaN()'
/**
 * Returns true if the value is NaN (Not a Number)
 */

var num = "abc";
console.log(isNaN(num)); // Output: true

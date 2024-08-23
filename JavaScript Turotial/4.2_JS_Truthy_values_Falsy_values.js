// javaScript Truthy and Falsy Values

//Falsy Values
/**
 * 
 * A "falsy" value is one that is considered false when encountered in a boolean context. JavaScript has only six falsy values:

    1. `false`- The boolean false.
    2. `0` - The number zero.
    3. `""` (empty string) - A string with no characters.
    4. `null` - Represents the intentional absence of any object value.
    5. `undefined` - Indicates that a variable has been declared but not assigned a value.
    6. `NaN` - Stands for "Not-a-Number"; it is a result of an invalid or undefined mathematical operation. 

*/
// Examples 1

if (false) {
  console.log("Hello World!!");
}
if (0) {
  console.log("Hello World!!");
}
if ("") {
  console.log("Hello World!!");
}
if (null) {
  console.log("Hello World!!");
}
if (undefined) {
  console.log("Hello World!!");
}
if (NaN) {
  console.log("Hello World!!");
}

// Example 2
let falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach((value) => {
  //   console.log(Boolean(value));
  console.log(value + " is falsy: " + Boolean(value));
});

// Truthy Values

/** *
 * A "truthy" value is one that is considered true when encountered in a boolean context. Any value that is not falsy is truthy. This includes, but is not limited to:

* Any non-zero number (e.g., 1, -1, 3.14)
* Any non-empty string (e.g., "hello", "0")
* Objects and arrays (even empty ones)
* The boolean true

*/
// Example 1

if (true) {
  console.log("Hello World!!");
}
if (1) {
  console.log("Hello World!!");
}
if (" ") {
  console.log("Hello World!!");
}
if ({}) {
  console.log("Hello World!!");
}

// JavaScript For Of Loop

// The for...of loop in JavaScript is designed for iterating over iterable objects, such as arrays, strings, maps, sets, and more. It provides a clean and straightforward way to loop through values in these collections without needing to deal with indices or keys.

// Syntax
// The syntax of the for...of loop is:

for (const element of iterable) {
  // Code to execute for each element
}

// element: Represents the current value in the iteration.
// iterable: The object you are iterating over (e.g., an array, string, map, set).
// Example
// Here’s a basic example of using for...of to iterate over an array:

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit); // Logs "apple", "banana", "cherry"
}
// Detailed Breakdown
// Iteration Over Values:

// for...of iterates directly over the values of the iterable object. Unlike for...in, which iterates over property names (keys), for...of focuses on the actual values.
// Iterable Objects:

// The for...of loop works with various iterable objects, including:
// Arrays
// Strings
// Maps
// Sets
// Generators
// Examples

// 1. Iterating Over a String

const message = "Hello";

for (const char of message) {
  console.log(char); // Logs each character: "H", "e", "l", "l", "o"
}

// 2. Iterating Over a Map

const map = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25
// city: New York

// Map Entries: In a Map, each iteration provides an array where the first element is the key and the second is the value.

// 3. Iterating Over a Set

const numbers = new Set([1, 2, 3, 4, 5]);

for (const number of numbers) {
  console.log(number); // Logs 1, 2, 3, 4, 5
}
// Set Values: In a Set, each iteration provides the value directly, as sets do not have keys.

// 4. Using for...of with Generators

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for (const num of numberGenerator()) {
  console.log(num); // Logs 1, 2, 3
}

// Generators: Functions that use yield to produce a sequence of values.
// Key Points
// Readable and Concise:

// for...of provides a more readable and concise way to iterate over values compared to traditional for loops or for...in.
// Avoids Indexes:

// Unlike the traditional for loop, for...of does not require you to manage or access indexes, making it ideal for iterating over values directly.
// Not for Objects:

// for...of does not work with plain objects. Use for...in for iterating over object keys or Object.entries() for iterating over key-value pairs.
// Suitable for Any Iterable:

// Use for...of with any iterable object, including arrays, strings, maps, sets, and custom iterables.

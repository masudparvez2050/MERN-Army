// For Each Loop

// The forEach loop in JavaScript is a method available on arrays that allows you to iterate over each element in the array and execute a provided function for each element. It is a cleaner and more concise alternative to traditional for loops when you need to perform operations on array elements.

// Syntax
// The syntax of the forEach method is:


array.forEach(callback(currentValue, index, array) {
  // Code to execute for each element;
});

// callback: A function that is called for every element in the array.
// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array forEach was called upon.
// Example
// Here’s a basic example of using forEach to log each element in an array:


const fruits1 = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log(fruit); // Logs "apple", "banana", "cherry"
});

// Using Arrow Functions
// You can use arrow functions for more concise syntax:

const fruits2 = ["apple", "banana", "cherry"];

fruits.forEach(fruit => console.log(fruit)); // Logs "apple", "banana", "cherry"

// Detailed Breakdown
// Callback Function: 

// The callback function is executed once for each element in the array.
// You can use this function to perform operations on the elements.
// Parameters:

// currentValue: The value of the current array element.
// index (optional): The index of the current array element.
// array (optional): The array forEach was called upon.
// No Return Value:

// forEach does not return a new array or any value. It simply performs the operation defined in the callback function.
// Examples


// 1. Iterating with Index

const number = [10, 20, 30];

numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});



// Output:
// Index 0: 10
// Index 1: 20
// Index 2: 30

// 2. Modifying Array Elements (not recommended for forEach)
let numbers = [1, 2, 3, 4];

numbers.forEach((number, index, arr) => {
  arr[index] = number * 2; // Doubles each element
});

console.log(numbers); // Logs [2, 4, 6, 8]



// Modifying array elements directly within forEach can be done, but it’s not always recommended as it can lead to side effects. Use methods like map if you need to transform and return a new array.

// 3. Using forEach on Objects
// forEach is specifically designed for arrays and does not work directly with objects. If you need to iterate over object properties, you can use Object.keys or Object.entries:

const person = { name: "Alice", age: 25, city: "New York" };

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Output:
// name: Alice
// age: 25
// city: New York

// Key Points
// Array-Specific: forEach is a method for arrays and does not work with other data structures like objects or sets.

// No Return Value: Unlike methods such as map, forEach does not return a new array. It only performs actions on each element.

// Side Effects: Be cautious when modifying the array within forEach as it can affect the original array and may lead to unexpected results.

// Use Cases: forEach is useful for operations that do not need to modify the array and do not need a return value, such as logging values or performing side effects.
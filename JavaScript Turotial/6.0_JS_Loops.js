// JavaScript Loops

// Loops are fundamental control structures in programming that allow you to execute a block of code multiple times. They are used to automate repetitive tasks and iterate over data collections. JavaScript provides several types of loops, each suited for different scenarios.

// Types of Loops in JavaScript

// 1. for Loop
// The for loop is used to repeat a block of code a specific number of times. It’s commonly used when the number of iterations is known beforehand.

// Syntax:

for (initialization; condition; increment / decrement) {
  // Code to execute in each iteration
}
Example: for (var i = 0; i < 5; i++) {
  console.log(i); // Logs 0, 1, 2, 3, 4
}

// Initialization: var i = 0 sets the starting value.
// Condition: i < 5 continues the loop as long as this condition is true.
// Increment/Decrement: i++ increases i by 1 each iteration.

// 2. while Loop
// The while loop executes a block of code as long as the specified condition evaluates to true. It’s used when the number of iterations is not known beforehand and depends on a condition being met.

// Syntax:

while (condition) {
  // Code to execute while condition is true
}
Example: var i = 0;
while (i < 5) {
  console.log(i); // Logs 0, 1, 2, 3, 4
  i++;
}

// Condition: i < 5 determines whether the loop continues.
// Increment/Decrement: i++ increases i in each iteration.

// 3. do-while Loop
// The do-while loop is similar to the while loop but guarantees that the block of code is executed at least once, as the condition is checked after the code block executes.

// Syntax:

do {
  // Code to execute
} while (condition);
Example: var i = 0;
do {
  console.log(i); // Logs 0, 1, 2, 3, 4
  i++;
} while (i < 5);

// Condition: i < 5 is checked after the code block executes.

// 4. for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object. It’s typically used for objects, not arrays.

// Syntax:

for (var key in object) {
  // Code to execute for each key
}
// Example:

var person = { name: "Alice", age: 25, city: "New York" };
for (var key in person) {
  console.log(key + ": " + person[key]);
}
// Output:

// name: Alice
// age: 25
// city: New York

// 5. for...of Loop
// The for...of loop is used to iterate over the values of iterable objects such as arrays, strings, and other collections.

// Syntax:

for (var value of iterable) {
  // Code to execute for each value
}
Example: var numbers = [1, 2, 3, 4, 5];
for (var number of numbers) {
  console.log(number); // Logs 1, 2, 3, 4, 5
}
// Output:

1;
2;
3;
4;
5;

// Key Points
// Initialization: Sets up the initial state or value before the loop starts.
// Condition: Determines whether the loop should continue or terminate.
// Increment/Decrement: Updates the state or value after each iteration.
// Execution Order: In while and do-while loops, the code block is executed based on the condition being true. In for loops, initialization, condition checking, and increment/decrement are part of the loop’s structure.
// Loop Control Statements:
// break: Exits the loop prematurely.
// continue: Skips the current iteration and proceeds with the next one.
// Example Combining Loop Types

// Using for loop
for (var i = 0; i < 3; i++) {
  console.log("for loop iteration: " + i);
}

// Using while loop
var j = 0;
while (j < 3) {
  console.log("while loop iteration: " + j);
  j++;
}

// Using do-while loop
var k = 0;
do {
  console.log("do-while loop iteration: " + k);
  k++;
} while (k < 3);

// Using for...in loop
var person = { name: "John", age: 30 };
for (var key in person) {
  console.log(key + ": " + person[key]);
}

// Using for...of loop
var array = [10, 20, 30];
for (var value of array) {
  console.log(value);
}
// Loops are essential for handling repetitive tasks and processing collections of data efficiently. They are versatile tools in programming, enabling automation and control over code execution. If you have any more questions or need further examples, feel free to ask!

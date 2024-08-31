// JavaScript While Loops

// The while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition evaluates to true. It's particularly useful when you don't know in advance how many times you need to iterate, or when the number of iterations depends on dynamic conditions.

// Syntax
// The syntax of a while loop is:

while (condition) {
  // Code to execute while the condition is true
}
// condition: An expression that evaluates to true or false. The loop continues to execute as long as this condition is true.
// Example
// Here’s a basic example of a while loop:

let count = 0;

while (count < 5) {
  console.log(count); // Logs 0, 1, 2, 3, 4
  count++; // Increment the counter
}
// In this example:

// Condition: count < 5 is checked before each iteration.
// Loop Body: console.log(count) is executed while the condition is true.
// Increment: count++ updates the counter variable to eventually end the loop.
// Detailed Breakdown
// Condition:

// Evaluated before each iteration. If the condition evaluates to false, the loop terminates.
// Ensure the condition will eventually become false to prevent an infinite loop.
// Loop Body:

// Contains the code that executes each time the loop iterates.
// Updating Variables:

// Typically, you modify a variable used in the condition inside the loop body to eventually make the condition false.
// Variations and Examples

// 1. Infinite Loop
let number = 1;

while (true) {
  console.log(number);
  number++;
  if (number > 5) break; // Break condition to exit the loop
}
// The loop will run indefinitely unless the break statement is executed.

// 2. Waiting for User Input

let userInput;

while (userInput !== "exit") {
  userInput = prompt("Enter a command (type 'exit' to quit):");
  console.log("You entered: " + userInput);
}
// This loop will continue prompting the user until they type "exit".
// 3. Reading from an Array

let index = 0;
const colors = ["red", "green", "blue"];

while (index < colors.length) {
  console.log(colors[index]); // Logs each color in the array
  index++;
}

// The loop iterates through the array and logs each element until index is equal to the length of the array.
// Key Points
// Condition Check: The condition is evaluated before each iteration. If it’s false initially, the loop body may not execute at all.

// Infinite Loop Risk: Ensure that the condition will eventually become false. If not, you risk creating an infinite loop that never terminates.

// Using break Statement: You can use the break statement to exit a loop prematurely if a certain condition is met.

// Avoid Unnecessary Loops: In some cases, while loops can be replaced with for loops or other constructs that provide better clarity or performance.

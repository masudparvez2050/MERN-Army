// javaScript For Loops

// The for loop is a versatile control structure in JavaScript used to repeat a block of code a specific number of times. It is ideal when you know beforehand how many times you need to execute a block of code.

// Syntax
// The syntax of a for loop is:

for (initialization; condition; increment / decrement) {
  // Code to execute in each iteration
}

// initialization: Sets up a counter variable or state before the loop starts.
// condition: Evaluates before each iteration to determine whether the loop should continue.
// increment/decrement: Updates the counter variable after each iteration.
// Example
// Here’s a basic example of a for loop:

for (let i = 0; i < 5; i++) {
  console.log(i); // Logs 0, 1, 2, 3, 4
}
// In this example:

// Initialization: let i = 0 sets up the starting value of i.
// Condition: i < 5 checks if i is less than 5 before each iteration.
// Increment: i++ increases i by 1 after each iteration.
// Detailed Breakdown
// Initialization:

// The initialization expression is executed once at the beginning of the loop. It usually defines and initializes the loop control variable.
// Example: let i = 0; initializes the variable i.
// Condition:

// The condition expression is evaluated before each iteration. If it evaluates to true, the loop body executes. If it evaluates to false, the loop terminates.
// Example: i < 5 checks whether i is less than 5.
// Increment/Decrement:

// The increment or decrement expression is executed after each iteration of the loop body. It updates the loop control variable.
// Example: i++ increments i by 1.
// Variations and Examples
// 1. Looping Through an Array

let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Logs "apple", "banana", "cherry"
}
// fruits.length gives the total number of elements in the array.

// 2. Loop with Decrement
for (let i = 5; i > 0; i--) {
  console.log(i); // Logs 5, 4, 3, 2, 1
}
// i-- decreases i by 1 after each iteration.

// 3. Loop with Multiple Variables
for (let i = 0, j = 10; i < 5; i++, j -= 2) {
  console.log("i:", i, "j:", j); // Logs pairs of i and j values
}
// i++ increments i by 1.
// j -= 2 decreases j by 2.

// 4. Infinite Loop
for (;;) {
  console.log("This will run forever"); // Be careful with infinite loops!
  break; // Use break to exit the loop if needed
}
// An infinite loop occurs when the condition is always true or omitted. Use break to exit the loop if necessary.
// Common Use Cases
// Iterating Through Arrays: Access each element using its index.
// Generating Series: Create a sequence of numbers.
// Performing Repetitive Tasks: Execute a block of code multiple times.

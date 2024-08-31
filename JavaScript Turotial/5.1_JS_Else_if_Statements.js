// JavaScript Else If Statements

// The else if statement in JavaScript is used to specify a new condition if the previous if condition is false. It allows you to chain multiple conditions and execute different code blocks based on the evaluation of these conditions. This is useful when you need to handle several distinct cases.

// Syntax
// The basic syntax of an if-else if-else statement is:

if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else if (condition3) {
  // Code to execute if condition3 is true
} else {
  // Code to execute if none of the above conditions are true
}
// condition1, condition2, condition3: Expressions that evaluate to true or false.
// Code blocks: Blocks of code inside {} that run based on which condition is true.
// Example
// Let’s look at an example of using else if to classify a numeric score into grades:

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// In this example:

// If score is 90 or above, it logs "Grade: A".
// If score is between 80 and 89, it logs "Grade: B".
// If score is between 70 and 79, it logs "Grade: C".
// If score is between 60 and 69, it logs "Grade: D".
// If score is below 60, it logs "Grade: F".
// Key Points

// Order Matters: Conditions are evaluated from top to bottom. The first condition that evaluates to true will execute its code block, and the rest will be ignored. Ensure that more specific conditions come before more general ones.

// Optional else: The final else block is optional. It executes if none of the preceding conditions are true.

// Combining Conditions: You can combine conditions using logical operators (&&, ||, !) to create complex conditions.

// Example with Combined Conditions

let age = 25;
let hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("You can enter the concert.");
} else if (age >= 18 && !hasTicket) {
  console.log("You need a ticket to enter the concert.");
} else if (age < 18 && hasTicket) {
  console.log("You need to be at least 18 to enter the concert.");
} else {
  console.log(
    "You need both a ticket and to be at least 18 to enter the concert."
  );
}
// In this example:

// The first condition checks if the person is 18 or older and has a ticket.
// The second condition checks if the person is 18 or older but doesn’t have a ticket.
// The third condition checks if the person is under 18 but has a ticket.
// The final else block covers the remaining cases.

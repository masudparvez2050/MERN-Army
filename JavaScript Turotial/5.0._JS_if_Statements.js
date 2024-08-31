// JavaScript If Statements

// The if statement in JavaScript is a fundamental control structure used to execute code based on a condition. It evaluates an expression and, if the condition is true, it executes a block of code. Here's a detailed look at how if statements work:

// Basic If Statement
// The basic syntax of an if statement is:

if (condition) {
  // Code to execute if the condition is true
}

// condition: An expression that evaluates to true or false.
// Code block: The block of code inside {} that runs if the condition is true.
// Example:

var age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// In this example, if age is 18 or older, the message "You are an adult." will be logged to the console.

// If-Else Statement
// The if-else statement provides an alternative block of code that runs when the condition is false.

// Syntax:

if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
// Example:

var age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// In this example, if age is less than 18, the message "You are a minor." will be logged instead.

// If-Else If-Else Statement
// The if-else if-else statement allows for multiple conditions to be checked in sequence.

// Syntax:

if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if none of the above conditions are true
}
// Example:

var score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// In this example, the code checks several conditions to determine the grade based on the score.

// Nested If Statements
// You can nest if statements inside each other to check multiple conditions.

// Syntax:

if (condition1) {
  if (condition2) {
    // Code to execute if both condition1 and condition2 are true
  }
}
// Example:

var age = 20;
var hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You can enter the club.");
  } else {
    console.log("You need an ID to enter.");
  }
} else {
  console.log("You are too young to enter.");
}

// In this example, the nested if checks whether the person has an ID if they are old enough.

// If Statements with Logical Operators
// You can combine multiple conditions using logical operators.

// Logical AND (&&): Both conditions must be true.

if (age >= 18 && hasID) {
  console.log("You can enter the club.");
}

// Logical OR (||): At least one condition must be true.

if (age >= 18 || hasPermission) {
  console.log("Access granted.");
}

// Logical NOT (!): Inverts the boolean value.

if (!hasID) {
  console.log("You need an ID to enter.");
}

// Example with Logical Operators

var temperature = 22;
var isSunny = true;

if (temperature > 20 && isSunny) {
  console.log("It's a great day for a walk.");
} else if (temperature > 20 && !isSunny) {
  console.log("It's warm, but a bit cloudy.");
} else {
  console.log("The weather is not ideal for a walk.");
}

// In this example, multiple conditions are checked to determine the message based on the weather.

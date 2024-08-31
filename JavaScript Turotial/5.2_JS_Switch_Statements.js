// Java Script Switch Statements

// The switch statement in JavaScript is used to evaluate an expression and execute code blocks based on matching case labels. It is often used as an alternative to multiple if-else statements when you need to compare the same expression against different values.

// Syntax
// The basic syntax of a switch statement is:

switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  // Additional cases
  default:
  // Code to execute if none of the cases match
}

// expression: The value or expression that will be compared against each case label.
// case value1: A specific value to match against the expression. If it matches, the associated code block executes.
// break;: Exits the switch block. Without break, execution will continue into the next case.
// default: Optional. Code to execute if none of the case values match.
// Example
// Here's a simple example using switch to determine the day of the week based on a number:

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}
// In this example:

// If day is 3, the output will be "Wednesday".
// If day does not match any case (e.g., day is 8), the output will be "Invalid day number".
// Key Points
// Break Statement: The break statement is crucial in switch statements to prevent fall-through. Without break, execution continues to the next case, which may not be the desired behavior.

// Fall-Through Behavior: If you omit break, the code will execute all subsequent cases until it hits a break or the end of the switch block.

let score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: D");
}

// Here, the true expression allows the switch to evaluate conditions in each case, and only the first matching case will execute.

// Default Case: The default case is executed if none of the specified case values match the expression. It is similar to the else block in an if-else chain and is optional.

// Expressions as Case Values: The case labels can be expressions, including constants, strings, or even variables, but they should be of the same type as the expression being tested.

// Example with Expressions

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Yellow fruit");
    break;
  case "apple":
    console.log("Red or green fruit");
    break;
  case "grape":
    console.log("Purple or green fruit");
    break;
  default:
    console.log("Unknown fruit");
}
// In this example:

// If fruit is "apple", the output will be "Red or green fruit".
// If fruit is not one of the specified cases, the output will be "Unknown fruit".

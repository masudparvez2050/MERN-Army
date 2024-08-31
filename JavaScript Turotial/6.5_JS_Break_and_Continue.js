// javaScript Break and Continue

// In JavaScript, the break and continue statements are used to control the flow of loops. They can modify the default behavior of loops, allowing for more flexible and precise control.

// break Statement
// The break statement is used to exit a loop or a switch statement prematurely. When break is encountered, the loop or switch is terminated, and the program continues executing from the point immediately after the loop or switch block.

// Syntax

break;

// Example
// Breaking out of a for loop:

for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop when i equals 5
  }
  console.log(i); // Logs 0, 1, 2, 3, 4
}


// Breaking out of a while loop:


var count = 0;

while (count < 10) {
  if (count === 3) {
    break; // Exits the loop when count equals 3
  }
  console.log(count); // Logs 0, 1, 2
  count++;
}

// continue Statement

// The continue statement is used to skip the current iteration of a loop and proceed to the next iteration. It only affects the loop in which it is used, and the remaining code inside the loop for the current iteration is skipped.

// Syntax

continue;

// Example
// Skipping an iteration in a for loop:

for (var i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips the rest of the loop body when i equals 2
  }
  console.log(i); // Logs 0, 1, 3, 4
}

// Skipping an iteration in a while loop:


var count = 0;

while (count < 5) {
  if (count === 2) {
    count++;
    continue; // Skips the rest of the loop body when count equals 2
  }
  console.log(count); // Logs 0, 1, 3, 4
  count++;
}

// Key Points

// break Statement:

// Purpose: Exits the entire loop or switch statement immediately.
// Scope: Exits the loop or switch block in which it is contained.
// continue Statement:

// Purpose: Skips the remaining code in the current loop iteration and proceeds with the next iteration.
// Scope: Affects only the current iteration of the loop in which it is contained.
// Use Cases:

// break: Use when you need to stop the loop based on a condition or if a certain case is met in a switch statement.
// continue: Use when you need to skip certain iterations of the loop based on a condition but continue iterating over the remaining elements.
// Nested Loops:

// break: Exits the innermost loop or switch statement. To exit multiple levels, you might need multiple break statements or additional logic.
// continue: Affects only the innermost loop. To skip iterations in outer loops, you would need additional logic.
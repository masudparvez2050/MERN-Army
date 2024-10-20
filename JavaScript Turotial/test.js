// var readline = require("readline");

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What do you think of node.js? ", function (answer) {
//   // TODO: Log the answer in a database
//   let a = 10;
//   let b = +answer;
//   if (isNaN(b)) {
//     console.log("Please inter a number");
//     rl.close();
//   } else {
//     console.log(a + b);
//   }

//   rl.close();
// });

// const readlineSync = require("readline-sync");
// console.log(readlineSync.question(" What is your problem?"));

// const num1 = parseInt(readlineSync.question("Enter first number: "));

// const num2 = parseInt(readlineSync.question("Enter second number: "));

// console.log(`Sum of ${num1} and ${num2} is: ${num1 + num2}`);

for (let i = 0, j = 10; i < 5; i++, j -= 2) {
  console.log("i:", i, "j:", j); // Logs pairs of i and j values
}

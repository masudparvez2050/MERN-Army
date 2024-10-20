// JavaScript Function

// syntax of functions
// function functionName(parameters) {
//     // Code to be executed
//     return value; // Optional
//   }
//functionName(arguments) // for function execution or function invocation (invok) or function calling

// function greet(name) {
//   return "Hello, " + name;
// }

// console.log(greet("Masud")); // Output: Hello, Alice

// Function Declaration:
// function greet() {
//     console.log('Hello!');
//   }

//Function Expression
// const greet = function () {
//   console.log("Hello Masud!");
// };

// Anonymous Function
// setTimeout(function () {
//   console.log("This is an anonymous function.");
// }, 1000);

// Arrow Function:

// const greet = () => {
//     console.log('Hello!');
//   };

//Parameters:
// function greet(name) {
//     console.log('Hello, ' + name);
//   }

//Arguments:
// greet('Alice'); // 'Alice' is the argument

// Return Value:
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(3, 5)); // Output: 8

// Callback Function:

// function process(callback) {
//     callback();
//   }

//   process(() => {
//     console.log('Callback function executed.');
//   });

// IIFE (Immediately Invoked Function Expression):
// (function() {
//     console.log('This runs immediately.');
//   })();

// Higher-Order Function:

// function higherOrder(func) {
//     return func();
//   }

//   higherOrder(() => console.log('This is a higher-order function.'));

// Closure

// function outer() {
//     const outerVar = 'I am outside!';
//     return function inner() {
//       console.log(outerVar);
//     };
//   }

//   const innerFunction = outer();
//   innerFunction(); // Output: 'I am outside!'

// Rest Parameters:
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10

// // Default Parameters:
// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }
// greet(); // Output: Hello, Guest

// Recursive Function:
// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120

//   Generator Function:
// function* generatorFunc() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

//   const gen = generatorFunc();
//   console.log(gen.next().value); // Output: 1

// Pure Function:
// function add(a, b) {
//     return a + b;
//   }

// Difference Between Function Declaration and Function Expression:

// greet();
// function greet() {
//   console.log('Hello!');
// }

// greet();  // Error: greet is not defined
// const greet = function() {
//   console.log('Hello!');
// };

// Returning from Function

// function add(a, b) {
//     return a + b;  // Returns the sum of a and b
//   }

//   let result = add(5, 3);
//   console.log(result);  // Output: 8

// function checkAge(age) {
//     if (age < 18) {
//       return 'Too young';  // Stops function execution if age is less than 18
//     }
//     return 'Welcome!';  // This line will only execute if age is 18 or above
//   }

//   console.log(checkAge(15));  // Output: 'Too young'
//   console.log(checkAge(20));  // Output: 'Welcome!'

// Returning an Object:

// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// const person = createPerson("Alice", 25);
// console.log(person); // Output: {name: "Alice", age: 25}


// Returning an Array:

// function getNumbers() {
//     return [1, 2, 3, 4, 5];
//      // Returns an array of numbers
//   }
  
//   console.log(getNumbers());  // Output: [1, 2, 3, 4, 5]

// Returning undefined

// function greet() {
//     console.log('Hello!');
    
//   }
  
//   let result = greet();  // No return statement in the function
//   console.log(result);   // Output: undefined

// Returning from Arrow Functions

// const multiply = (a, b) =>  a * b;  // Implicit return of a * b

// const result = multiply(10, 20)
// console.log(result);  // Output: 12


// Default Parameter

// function greet(name = 'Guest') {
//     console.log('Hello, ' + name);
//   }
  
//   greet();          // Output: Hello, Guest
//   greet('Alice');   // Output: Hello, Alice

// Multiple Default Parameters

// function calculatePrice(price, taxRate = 0.05) {
//     return price + (price * taxRate);
//   }
  
//   console.log(calculatePrice(100));      // Output: 105 (using default tax rate)
//   console.log(calculatePrice(100, 0.1)); // Output: 110 (custom tax rate provided)

// Using undefined to Trigger Default Value

// function multiply(a, b = 2) {
//     return a * b;
//   }
  
//   console.log(multiply(5));        // Output: 10 (b defaults to 2)
//   console.log(multiply(5, undefined)); // Output: 10 (b defaults to 2)
//   console.log(multiply(5, 3));     // Output: 15 (b is set to 3)

// Default Values with Functions
// function getDefaultAge() {
//     return 18;
//   }
  
//   function registerUser(name, age = getDefaultAge()) {
//     console.log(name + ' is ' + age + ' years old');
//   }
  
//   registerUser('Bob');  // Output: Bob is 18 years old
//   registerUser('Alice', 25);  // Output: Alice is 25 years old


// ### Important Notes:

// - **Order matters**: Parameters with default values should generally come after parameters without defaults to avoid confusion.
// - **Falsy values**: Default values are used only when the argument is `undefined`, not for other falsy values like `null`, `0`, `false`, or `""` (empty string).
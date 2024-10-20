// 1. Check Odd or Even: Write a program that checks whether a given number is odd or even using an if-else statement.

// Solution:

let num = 15;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/**
 *2. Grade Calculation Using If-Else: Write a program that takes a student's score and prints the grade:
A for 90 and above
B for 80 to 89
C for 70 to 79
D for 60 to 69
F for below 60
 */

// Solution:

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

/**
 *3. Simple Calculator Using Switch: Create a basic calculator that takes two numbers and an operator (+, -, *, /) and returns the result using a switch statement.
 */

// Solution:

let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid operator");
}
/**
 * 4. Countdown Using While Loop: Write a program that counts down from 10 to 1 using a while loop.
 */

let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}

/**
 * 5. Multiplication Table Using For Loop: Create a program that prints the multiplication table for the number 7 (from 1 to 10) using a for loop.
 */

/**
 * output:
 * 7 x 1 = 7
 * 7 x 2 = 14
 * 7 x 3 = 21
 * 7 x 4 = 28
 * 7 x 5 = 35
 * 7 x 6 = 42
 * 7 x 7 = 49
 * 7 x 8 = 56
 * 7 x 9 = 63
 * 7 x 10 = 70
 */

var num = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

/**
 * 6. Check Divisibility: Write a program that checks if a number is divisible by both 3 and 5.
 */

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible by both 3 and 5");
}

/**
 * 7.Print First 10 Odd Numbers Using For Loop: Write a program that prints the first 10 odd numbers using a for loop.
 */

/**
 * 8.Temperature Conversion (Celsius to Fahrenheit): Write a program to convert a given temperature from Celsius to Fahrenheit using the formula: F = C * 9/5 + 32.
 */

/**
 * 9. Check Number Sign: Write a program that checks whether a number is positive, negative, or zero using if-else statements.
 */

/**
 * 10.Calculate Sum of First 10 Natural Numbers: Write a program that calculates the sum of the first 10 natural numbers using a for loop.
 */

/**
 * 11. Find the Largest Number Using If-Else: Write a program that compares three numbers and prints the largest one.
 */

let a = 25,
  b = 12,
  c = 30;

if (a > b && a > c) {
  console.log("Largest number is: " + a);
} else if (b > a && b > c) {
  console.log("Largest number is: " + b);
} else {
  console.log("Largest number is: " + c);
}

/**
 *
 * 12. Sum of Even Numbers (1–20) Using a For Loop: Write a program that calculates the sum of all even numbers from 1 to 20 using a for loop.
 */

let sum = 0;

for (let i = 1; i <= 4; i++) {
  
    sum = sum +  i;

}
console.log("Sum of even numbers from 1 to 20 is: " + sum);

/**
 * 13 Find the Number of Digits in a Given Number: Write a program to find how many digits a given number has. given a number 123456
 */

let num3 = 123456;
let count1 = 0;

while (num3 > 0) {
  num3 = Math.floor(num3 / 10);
  count1++;
}

console.log("Number of digits in 123456 is: " + count1);

/**
 * 
 * 14. Print a Pattern: Write a program that prints the following pattern using nested for loops:
1
12
123
1234
12345

 */

/**
 *
 * 15. Check Vowel or Consonant Using Switch: Write a program that checks whether a given character is a vowel or a consonant using a switch statement.
 */

let char2 = "e";

switch (char2) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(char2 + " is a vowel");
    break;
  default:
    console.log(char2 + " is a consonant");
}

/**
 * 16. Factorial Calculation Using a While Loop: Write a program that calculates the factorial of a given number using a while loop.
 */

let num4 = 5;
let factorial = 1;

while (num4 > 0) {
  factorial *= num4;
  num4--;
}
console.log("Factorial of " + 5 + " is: " + factorial);

/**
 * 17. Check Leap Year: Write a program that checks whether a given year is a leap year or not.
 */

let year2 = 2024;

if ((year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0) {
  console.log(year2 + " is a leap year");
} else {
  console.log(year2 + " is not a leap year");
}

1.  Check Odd or Even: Write a program that checks whether a given number is odd or even using an if-else statement.

Solution:

javascript
Copy code
let num = 15;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
Grade Calculation Using If-Else: Write a program that takes a student's score and prints the grade:
A for 90 and above
B for 80 to 89
C for 70 to 79
D for 60 to 69
F for below 60
Solution:

javascript
Copy code
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
Simple Calculator Using Switch: Create a basic calculator that takes two numbers and an operator (+, -, *, /) and returns the result using a switch statement.
Solution:

javascript
Copy code
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
Countdown Using While Loop: Write a program that counts down from 10 to 1 using a while loop.
Solution:

javascript
Copy code
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
Multiplication Table Using For Loop: Create a program that prints the multiplication table for the number 7 (from 1 to 10) using a for loop.
Solution:

javascript
Copy code
let number = 7;
for (let i = 1; i <= 10; i++) {
    console.log(number + " * " + i + " = " + number * i);
}
Check Divisibility: Write a program that checks if a number is divisible by both 3 and 5.
Solution:

javascript
Copy code
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}
Print First 10 Odd Numbers Using For Loop: Write a program that prints the first 10 odd numbers using a for loop.
Solution:

javascript
Copy code
let count = 0;
for (let i = 1; count < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        count++;
    }
}
Temperature Conversion (Celsius to Fahrenheit): Write a program to convert a given temperature from Celsius to Fahrenheit using the formula: F = C * 9/5 + 32.
Solution:

javascript
Copy code
let celsius = 25;
let fahrenheit = celsius * 9/5 + 32;
console.log(fahrenheit); // Output: 77
Check Number Sign: Write a program that checks whether a number is positive, negative, or zero using if-else statements.
Solution:

javascript
Copy code
let num = -3;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
Calculate Sum of First 10 Natural Numbers: Write a program that calculates the sum of the first 10 natural numbers using a for loop.
Solution:

javascript
Copy code
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum); // Output: 55



Find the Largest Number Using If-Else: Write a program that compares three numbers and prints the largest one.
Solution:

javascript
Copy code
let a = 25, b = 12, c = 30;
if (a > b && a > c) {
    console.log("Largest number is: " + a);
} else if (b > a && b > c) {
    console.log("Largest number is: " + b);
} else {
    console.log("Largest number is: " + c);
}
Sum of Even Numbers (1–20) Using a For Loop: Write a program that calculates the sum of all even numbers from 1 to 20 using a for loop.
Solution:

javascript
Copy code
let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Sum of even numbers from 1 to 20: " + sum);
Find the Number of Digits in a Given Number: Write a program to find how many digits a given number has.
Solution:

javascript
Copy code
let num = 123456;
let digitCount = 0;

while (num !== 0) {
    num = Math.floor(num / 10);
    digitCount++;
}

console.log("Number of digits: " + digitCount);
Sum of Digits: Write a program to calculate the sum of the digits of a given number.
Solution:

javascript
Copy code
let num = 345;
let sum = 0;

while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of digits: " + sum);
Reverse a Number: Write a program to reverse a given number (e.g., 12345 should become 54321).
Solution:

javascript
Copy code
let num = 12345;
let reversed = 0;

while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}

console.log("Reversed number: " + reversed);
Print a Pattern: Write a program that prints the following pattern using nested for loops:
yaml
Copy code
1
12
123
1234
12345
Solution:

javascript
Copy code
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
Check Vowel or Consonant Using Switch: Write a program that checks whether a given character is a vowel or a consonant using a switch statement.
Solution:

javascript
Copy code
let char = 'e';
switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is a vowel");
        break;
    default:
        console.log(char + " is a consonant");
}
Factorial Calculation Using a While Loop: Write a program that calculates the factorial of a given number using a while loop.
Solution:

javascript
Copy code
let num = 5;
let factorial = 1;
while (num > 0) {
    factorial *= num;
    num--;
}
console.log("Factorial: " + factorial);
Simple Interest Calculation: Write a program that calculates simple interest using the formula: SI = (P * R * T) / 100.
Solution:

javascript
Copy code
let principal = 1000;
let rate = 5;
let time = 2;
let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest: " + simpleInterest);
Check Leap Year: Write a program that checks whether a given year is a leap year or not.
Solution:

javascript
Copy code
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

//  More Advance

Fibonacci Sequence Using a For Loop: Write a program that generates the Fibonacci sequence up to a given number of terms using a for loop. The Fibonacci sequence is characterized by the fact that every number after the first two is the sum of the two preceding ones.
Solution:

javascript
Copy code
let n = 10; // Number of terms
let a = 0, b = 1, next;
console.log(a);
console.log(b);
for (let i = 2; i < n; i++) {
    next = a + b;
    console.log(next);
    a = b;
    b = next;
}
Prime Number Check: Write a program that checks whether a given number is a prime number or not.
Solution:

javascript
Copy code
let num = 29;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${num} is a prime number` : `${num} is not a prime number`);
GCD (Greatest Common Divisor) of Two Numbers: Write a program to calculate the GCD (Greatest Common Divisor) of two numbers.
Solution:

javascript
Copy code
let a = 56, b = 98;
while (a !== b) {
    if (a > b) {
        a -= b;
    } else {
        b -= a;
    }
}
console.log("GCD: " + a);
LCM (Least Common Multiple) of Two Numbers: Write a program to calculate the LCM (Least Common Multiple) of two numbers.
Solution:

javascript
Copy code
let a = 15, b = 20;
let max = a > b ? a : b;
while (true) {
    if (max % a === 0 && max % b === 0) {
        console.log("LCM: " + max);
        break;
    }
    max++;
}
Sum of N Natural Numbers Using a While Loop: Write a program to calculate the sum of the first n natural numbers using a while loop.
Solution:

javascript
Copy code
let n = 10;
let sum = 0;
let i = 1;
while (i <= n) {
    sum += i;
    i++;
}
console.log("Sum of first " + n + " natural numbers: " + sum);
Print Even Numbers Using a For Loop: Write a program to print all even numbers between 1 and 100 using a for loop.
Solution:

javascript
Copy code
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
Palindrome Check for a Number: Write a program to check whether a given number is a palindrome or not. A palindrome is a number that reads the same forward and backward.
Solution:

javascript
Copy code
let num = 121;
let originalNum = num;
let reversed = 0;

while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}

if (originalNum === reversed) {
    console.log(originalNum + " is a palindrome");
} else {
    console.log(originalNum + " is not a palindrome");
}
Sum of Even and Odd Numbers Separately: Write a program that calculates the sum of even and odd numbers separately from 1 to 100.
Solution:

javascript
Copy code
let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("Sum of even numbers: " + sumEven);
console.log("Sum of odd numbers: " + sumOdd);
Armstrong Number Check: Write a program to check whether a given number is an Armstrong number or not. An Armstrong number is one where the sum of its digits raised to the power of the number of digits equals the original number (e.g., 153 = 1³ + 5³ + 3³).
Solution:

javascript
Copy code
let num = 153;
let sum = 0;
let temp = num;
let numOfDigits = String(num).length;

while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, numOfDigits);
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is an Armstrong number");
} else {
    console.log(num + " is not an Armstrong number");
}
Temperature Conversion (Celsius to Fahrenheit and Vice Versa): Write a program to convert a given temperature from Celsius to Fahrenheit and vice versa.
Solution:

javascript
Copy code
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

fahrenheit = 86;
celsius = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + "°F is " + celsius + "°C");

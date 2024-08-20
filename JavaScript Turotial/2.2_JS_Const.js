// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

const x = 10;
// x = 20;  // not Allowed

// Must Be Assigned
// const y;
// y = 10; // not allowed

// const array can be change element

const arr = [
  1,
  2,
  3,
  "a",
  {
    name: "John",
    age: 30,
    city: "New York",
  },
];
// arr = ["a","b","c"] // not allowed
arr[0] = 12;

console.log(arr);

arr.push("Masud");

console.log(arr);

console.log(arr.pop());

// But you can't reassign the array
// arr = ["a","b","c"] // not allowed

// Constant object
const obj = {
  name: "John", // property
  age: 30, // property
  city: "New York", // property
  sayHello: function () {
    console.log("Hello World"); // Method
  },
};

console.log(obj);

// you can change constant obj propertes

obj.name = "Masud"; // modify property
obj.age = 50; // modify property

console.log(obj);

// But you can't reassign the constant object

// obj = {
//   name: "Jane",
//   age: 25,
//   city: "Los Angeles",
//   sayHello: function () {
//     console.log("Hello Universe");
//   },
// };

// Block Scope

const y = 10;
console.log(y);

{
  const y = 5;
  console.log(y);
}

console.log(y);

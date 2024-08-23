// JavaScript Data Type

/** 
 * Primitive Datatype
 *  1. String
 *  2. Number
 *  3. Boolean
 *  4. Null
 *  5. Undefined
 *  6. Symbol
 *  7. BigInt

 * Object
   1. Object
   2. Function
   3. Array
   4. Date
   5. RegExp
   6. Map
   7. Set
   8. WeakMap
   9. WeakSet
   10. Symbol.iterator

   Special Case
   1. NaN
 */

// 1. String
// * Represent textual data
// * String are created by enclosing text in single quotes(''), double qoutes("") or backticks (``)

// * Example

let name = '"nayeem"';
let greeting = "hi";
let templateString = `${greeting}, ${name}`;
console.log(templateString);
console.log(typeof templateString); // 'string'

// 2. Number
// * Represent numeric data
// * Integers and floats are treated as numbers
let count = 10;
let totalPrice = 99.99;
let sum = count + totalPrice;
console.log(sum);
console.log(typeof sum); // 'number'

// 3. Boolean
// * Logical data type that can only have two values: true or false
// * used for conditional logic
let isLogged = true;
let isAuthorized = false;
console.log(typeof isLogged); // 'boolean'

// 4. Null
// * Represents an intentinal absence of any object value.
// * 'Null' if often used to signify that a variable should have no value

let myVar = null;
console.log(myVar);
console.log(typeof myVar); // 'object'

// 5. Undefined
// * Represents a variable that has been declared but not yet assigned a value.

let myUndefinedVar;
console.log(myUndefinedVar);
console.log(typeof myUndefinedVar); // 'undefined'

// 6. Symbol (introduced in ES6)
// * A unique and immutable primitive value.
let uniqueId = Symbol("id");

console.log(uniqueId);
console.log(typeof uniqueId); // 'symbol'

// 7. BigInt (introduced in ES10)
// * A numeric primitive value that can represent arbitrarily large integers.

let bigInt = BigInt(12345678901234567890);
console.log(bigInt);
console.log(typeof bigInt); // 'bigint'

// Object Data types

// 1. Object
// * A collection of key-value pairs, Keys are strings(or ``), and values can be data type.
// * Object can also contain function (called methods).

let person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  interest: ["Cricket", "Football", "Badminton"],
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
console.log(person);
console.log(typeof person); // 'object'

// 2. Function
// * A block of code that can be executed multiple times.
// * Functions are object that represent code blocks which can be executed
// * Functions can be assigned to variables, passed as arguments, and returned from other functons.

function greets() {
  console.log(`Hello, Masud`);
}
greets();

function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("masud");
function addNumbers(a, b) {
  let z = a + b;
  console.log(z);
  return z;
}
let y = addNumbers(5, 10);
console.log(y);

// 3. Array
// * A single variable can store multiple values
// * An array is an ordered collection of values separated by commas and enclosed in square brackets []
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(typeof fruits); // 'object'

//() parenthesis
//{} carlibres
//[] Square Brackets

// 4. Date
// Represents date and time
let today = new Date();
console.log(today);
console.log(typeof today); // 'object'

// 5. RegExp (Regular Expression)
// Represents regular expressions, used for pattern matching within strings.

let regex = /[a-z]/g;
console.log(regex);
console.log(typeof regex); // 'object'

// 6. Map

// A collection of keyed data items, like an object, but keys can be of any type.
let myMap = new Map();
myMap.set("name", "John Doe");
myMap.set("age", 30);
myMap.set("country", "Bangladesh");
console.log(myMap);
console.log(typeof myMap); // 'object'

// 7. Set
// A collection of unique values, like an array, but values cannot be duplicate.

let arr = ["apple", "banana"];
let mySet = new Set(arr);

mySet.add("banana"); // you can't store same data twice
mySet.add("mango"); // but you can store unique data
console.log(mySet); // set return index value pair object
console.log(typeof mySet); // 'object'

// 8. WeakMap
// A collection of keyed data items, like a Map, but only allows strings as keys.
// Similar to Map, but keys are weakly referenced, meaning they do not prevent garbage collection if there are no other references to the key.
let weakMap = new WeakMap();
let obj = { name: "John Doe" };
weakMap.set(obj, "This is John Doe");
console.log(weakMap);
console.log(typeof weakMap); // 'object'

// 9. WeakSet
// A collection of unique values, like a Set, but only allows objects as values.

let weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet);
console.log(typeof weakSet); // 'object'

// 10. Symbol.iterator
// A property of an object that returns an iterator for the object.

let myArray = ["apple", "banana", "orange", "Mango"];
let iterator = myArray[Symbol.iterator]();
console.log(iterator.next()); // { value: 'apple', done: false }
console.log(iterator.next()); // { value: 'banana', done: false }
console.log(iterator.next()); // { value: 'orange', done: false }
console.log(iterator.next()); // { value: 'orange', done: false }

let name2 = "javaScript";
let spliname2 = name2.split("");
console.log(spliname2);
let reversearr = spliname2.reverse();
console.log(reversearr);
let reversearrjoin = reversearr.join("");
console.log(reversearrjoin);

// Special Case

// 1. NaN

let a = 10;
let b = "20";
let c = a + b;
console.log(c); // '30'
console.log(typeof c); // 'string'
console.log(typeof NaN); // number
console.log(0 / 0); // NaN
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Math.sqrt(-1));
console.log(parseInt("jhjk"));
console.log(Number("jhkjhk"));
console.log(undefined + 11);
let value = 10;
console.log(isNaN(value));

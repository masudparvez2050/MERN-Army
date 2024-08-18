/**
 * Variables declared with "let" have Block Scope
 * Variables declared with "let" must be Declared before use
 * Variables declared with "let" cannot be Redeclared in the same scope
 */

//Block Scope
let x = 10;

{
  let x = 20;
  console.log(x); // Outputs: 20
  console.log(x * 2);
}
// x can NOT be used here
console.log(x);

// Global Scope

{
  var y = 20;
}

console.log(y); // Outputs: 20

// Cannot be Redeclared

// let z = 10;
let z = 20; // Error: Identifier 'z' has already been declared

var a = "Hello";
var a = "World"; // No Error: Identifier 'a' has already been declared
console.log(a);

// Redeclaring Variables "VAR"

var b = 10;
{
  var b = 20;
  var b = "Hello";
  console.log(b);
}

console.log(b); // Outputs: 20

var p = 2; // Allowed
let p = 10; // Not Allowed

{
  let q = 3; // allowed
}

{
  let p = 2; // Allowed
  var p = 4; // not allowed
  console.log(p); // Outputs: 4
}

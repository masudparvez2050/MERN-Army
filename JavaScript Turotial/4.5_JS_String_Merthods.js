// JavaScript String Methode

// JavaScript provides a variety of built-in string methods to manipulate and interact with strings. Below are some of the most commonly used string methods:

// 1.length
//Description: Returns the length of the string (number of characters).
//Example:
var str = "Hello, World!";
console.log(str.length); // 13

// 2. charAt()
// Description: Returns the character at a specified index.
// Example:

var str = "Hello";
console.log(str.charAt(1)); // "e"

// 3. charCodeAt()
// Description: Returns the Unicode of the character at a specified index.
// Example:

var str = "Hello";
console.log(str.charCodeAt(1)); // 101 ("e")

// 4. concat()
// Description: Joins two or more strings.
// Example:

var str1 = "Hello";
var str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"

// 5. includes()
// Description: Checks if a string contains a specified substring.
// Example:

var str = "Hello, World!";
console.log(str.includes("World")); // true

// 6. indexOf()
// Description: Returns the index of the first occurrence of a specified value in a string. Returns -1 if the value is not found.
// Example:

var str = "Hello, World!";
console.log(str.indexOf("World")); // 7
console.log(str.indexOf("world")); // -1 (case-sensitive)

// 7. lastIndexOf()
// Description: Returns the index of the last occurrence of a specified value in a string. Returns -1 if the value is not found.
// Example:

var str = "Hello, World! World!";
console.log(str.lastIndexOf("World")); // 14

// 8. slice()
// Description: Extracts a section of a string and returns it as a new string.
// Example:

var str = "Hello, World!";
console.log(str.slice(7, 12)); // "World"

// 9. substring()
// Description: Similar to slice(), but does not accept negative indexes.
// Example:

var str = "Hello, World!";
console.log(str.substring(7, 12)); // "World"

// 10. substr()
// Description: Returns a part of the string, starting at a specified index and extracting a given number of characters.
// Example:

var str = "Hello, World!";
console.log(str.substr(7, 5)); // "World"

// 11. toUpperCase()
// Description: Converts the string to uppercase.
// Example:

var str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// 12. toLowerCase()
// Description: Converts the string to lowercase.
// Example:

var str = "Hello, World!";
console.log(str.toLowerCase()); // "hello, world!"

// 13. trim()
// Description: Removes whitespace from both ends of the string.
// Example:

var str = "  Hello, World!  ";
console.log(str.trim()); // "Hello, World!"

// 14. replace()
// Description: Replaces a specified value with another value in a string. Only the first match is replaced unless a global (g) flag is used with a regular expression.
// Example:

var str = "Hello, World!";
console.log(str.replace("World", "Everyone")); // "Hello, Everyone!"

// 15. split()
// Description: Splits a string into an array of substrings based on a specified separator.
// Example:

var str = "Hello, World!";
var arr = str.split(", ");
console.log(arr); // ["Hello", "World!"]

// 16. repeat()
// Description: Returns a new string with a specified number of copies of the original string.
// Example:

var str = "Hello!";
console.log(str.repeat(3)); // "Hello!Hello!Hello!"

// 17. startsWith()
// Description: Checks if a string begins with a specified substring.
// Example:

var str = "Hello, World!";
console.log(str.startsWith("Hello")); // true

// 18. endsWith()
// Description: Checks if a string ends with a specified substring.
// Example:

var str = "Hello, World!";
console.log(str.endsWith("!")); // true

// 19. match()
// Description: Retrieves the matches of a string against a regular expression.
// Example:

var str = "The rain in SPAIN stays mainly in the plain";
var matches = str.match(/ain/g);
console.log(matches); // ["ain", "ain", "ain"]

// 20. search()
// Description: Searches a string for a specified value and returns the position of the match.
// Example:

var str = "Hello, World!";
console.log(str.search("World")); // 7

// 21. padStart()
// Description: Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
// Example:

var str = "5";
console.log(str.padStart(3, "0")); // "005"

// 22. padEnd()
// Description: Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
// Example:

var str = "5";
console.log(str.padEnd(3, "0")); // "500"

// 23. localeCompare()
// Description: Compares two strings in the current locale.
// Example:

var str1 = "apple";
var str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (because "apple" comes before "banana")

// Usage Example

var message = "  JavaScript is awesome!  ";
var trimmedMessage = message.trim(); // "JavaScript is awesome!"
var upperCaseMessage = trimmedMessage.toUpperCase(); // "JAVASCRIPT IS AWESOME!"
var replacedMessage = upperCaseMessage.replace("AWESOME", "GREAT"); // "JAVASCRIPT IS GREAT!"
var messageArray = replacedMessage.split(" "); // ["JAVASCRIPT", "IS", "GREAT!"]

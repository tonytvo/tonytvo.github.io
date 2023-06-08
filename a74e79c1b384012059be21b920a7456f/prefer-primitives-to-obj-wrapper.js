// prefer primitives to Object Wrappers
// Js has 5 types of primitives
// booleans, numbers, strings, null, undefined

// you can create a 'String' object that wraps a string value
var s = new String("hello");

s + " world";  // "hello world"

s[4]; // "o"

// unlike primitive strings, a String object is a true object
typeof s;       // object
typeof "hello"  // string

// means you can not compare the contents of two distinct 'String' objects
// using built-in operators
var s1 = new String("hello");
var s2 = new String("hello");

// each String object is a separate object, therefore only equal to its self
s1 === s2; //fasle

"hello".toUpperCase();    // "HELLO"

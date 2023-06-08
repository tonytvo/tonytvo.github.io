// Avoid relying on 'toString' method of functions
//
// JavaScript functions can reproduce their source code as a string!!!
// Mind === Blown;  // true
var myF =(function(x) {
    return x + 1;
}).toString();  // "function(x) {\n    return x + 1;\n}"

console.log(myF);

// but this has limitations
// especially with functions produced by built-in libraries of the host
// environment

var hiddenF = (function(x) {
    return x + 1;
}).bind(16).toString();  // "function () {\n    [native code]\n}"

console.log(hiddenF);

// in many host envs, the 'bind' function is implemented in another programming
// language (typically C++), it produces a compiled function that has no
// Js code to reveal.


// toString does not provide a representation of closures that preserve the
// values associated with their inner variable references

var closureF = (function(x) {
    return function(y) {
        return x + y;
    }
})(42).toString();

console.log(closureF);  //function(y) {\n    return x + y;\n}
// notice how the resultant string still contains a variable reference to x,
// even though the function is actually a closure that binds x to 42

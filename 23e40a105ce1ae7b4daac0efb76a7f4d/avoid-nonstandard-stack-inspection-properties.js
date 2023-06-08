// Avoid nonstandard stack inspection properties
//
// many Js envs have historically provided some capabilities to inspect the
// 'call stack'
//
// in some older host envs, the 'arguments' object came with two additional
// properties:
//      arguments.callee - the function that was called with arguments
//      arguments.caller - function that called it
//
// 'arguments.callee' is still supported, but only useful to anonymous
// functions to refer to themeselves recursively
var factorial = (function(n) {
    return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
});

// better just have a function refer to itself by its name
function factorial(n) {
    return (n <= 1) ? 1 : (n * factorial(n - 1));
}

// arguments.caller refers to the function that made the call with the given
// arguments object
// WARNING: Has been removed from most environments for security
// 
// Caveat Emptor: some envs have a 'caller' property which refers to the
// functions most recent caller
function revealCaller(){
    return revealCaller.caller;
}

function start() {
    return revealCaller()
}

start() === start; // true

// it is tempting to try to use this property to extract a 'stack trace'
function getCallStack() {
    var stack = [];
    for (var f = getCallStack.caller; f; f = f.caller) {
        stack.push(f);
    }
    return stack;
}

// for simple call stacks, 'getCallStack' appears to work fine
function f1() {
    return getCallStack();
}

function f2() {
    return f1();
}

var trace = f2()
trace; //  [f1, f2]

// 'getCallStack' can easily be broken: if the function shows up more than once
// in the call stack, the stack inspection logic gets stuck in a loop

function f(n) {
    return n === 0 ? getCallStack() : f(n - 1);
}

var trace = f(1); // infinite loop, because of recursive calls to f

// ES5 strict functions does not allow accesses to 'caller' or 'callee'

function f() {
    "use strict";
    return f.caller;
}

f(); // error: caller may not be accessed on strict functions

// prefer closures to strings for encapsulating code
// do we write a string, then pass to 'eval' to perform a function
// OR
// write a proper function?
// When in doubt, use a function
var count = 0;

function f(){
    ++count;
}

function repeat(n, action) {
    for (var i = 0; i < n; i++) {
        eval(action);
    }
}

// var start = [], end = [], timings = [];
// repeat(1000,
//     "start.push(Date.now()); f(); end.push(Date.now())");
// for (var i = 0, n = start.length; i < n; i++) {
//     timings[i] = end[i] - start[i];
// }

// above code works, but is brittle, moving the benchmark code into a function
// turns 'start' and 'end' into local variables

function benchmark() {
    var start = [], end = [], timings = [];
    repeat(1000,
        "start.push(Date.now()); f(); end.push(Date.now())");
    for (var i = 0, n = start.length; i < n; i++) {
        timings[i] = end[i] - start[i];
    }
    return timings;
}

// causes repeat to evaluate global variables 'start' and 'end'
// best case:
//      one of the globals will be missing resulting in a 'ReferenceError'
// worst case:
//      we push on some global objects that happen to be bound to 'start' and
//      'end' drastically altering our program
// Do it better:
count = 0;
function repeat(n, action) {
    for (var i = 0; i < n; i++) {
        action();
    }
}

// now benchmark safely refers to local variables within a closure

function benchmark() {
    var start = [], end = [], timings = [];
    repeat(1000, function() {
        start.push(Date.now());
        f();
        end.push(Date.now());
    });

    for (var i = 0, n = start.length; i < n; i++) {
        timings[i] = end[i] - start[i];
    }
    return timings;
}

// remember:
// high-perfomance engines have a hard time trying to optimize code written
// inside 'eval'

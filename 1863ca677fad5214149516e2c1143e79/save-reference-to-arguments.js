// use a variable to save a reference to 'arguments'
// iterator:
//     - an object which defines a sequence and potentially a return value upon
//       its termination.
//     - an iterator is any object which implements the 'iterator protocol' by
//       having a 'next()'
//
// 'iterator protocol:
//      - defines a standard way to produce a sequence of values(either finite
//        or infinite), and potentially a return value when all values have
//        been generated.
//      - an object is an iterator when it implements a 'next()' method 

function values() {
    var i = 0, n = arguments.length;
    return {
        hasNext: function() {
            return i < n;
        },
        next: function() {
            if (i >= n) {
                throw new Error("end of iteration");
            }
            return arguments[i++]; // wrong arguments
        }
    };
}

// doesn't work because a new 'arguments' variable is implicitly bound in the
// body of each function
// Soln. bind a new local variable in the scope of the arguments object we are
// interested in and make sure that nested functions only refer to that
// explicitly named variable

function values() {
    var i = 0, n = arguments.length, a = arguments;
    return {
        hasNext: function() {
            return i < n;
        },
        next: function() {
            if (i >= n) {
                throw new Error("end of iteration");
            }
            return a[i++];
        }
    };
}

var it = [4, 1, 4, 2, 5, 3, 7, 4, 9]

it.next();  // 4
it.next();  // 1
it.next();  // 4
it.next();  // 2

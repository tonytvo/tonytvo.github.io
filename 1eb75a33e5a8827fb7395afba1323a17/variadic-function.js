// use 'apply' to call functions with different numbers of arguments
//
// variadic or variable-arity function
// -----------------------------------
// A function that takes any number of arguments is known as a 'variadic function'
// 'arity' of a function is the number of arguments it expects
//
// average(1, 2, 3);                    // 2
// average(1);                          // 1
// average(3, 1, 4, 1, 5, 9, 2, 6, 5);  // 4
// average(2, 7, 1, 8, 2, 8, 1, 8);     // 4.625
//
//
// fixed arity version of 'average'
// -------------------------------
// would probably take a single argument containing an array of values
//
// averageOfArray([1, 2, 3]);                    // 2
// averageOfArray([1]);                          // 1
// averageOfArray([3, 1, 4, 1, 5, 9, 2, 6, 5]);  // 4
// averageOfArray([2, 7, 1, 8, 2, 8, 1, 8]);     // 4.625
//
//
// 'apply'
// ------
// takes an array of args and calls the function as if each element of the
// array were an individual arg of the call
//
// 'apply' takes a first arg that specifies the binding of this for the function
// being called
function averageOfArray(a) {
    for (var i =0, sum = 0, n = a.length; i < n; i++) {
        sum += a[i];
    }
    return sum / n;
}

function Student(name, score){
    this.name = name;
    this.score = score;
}


var students = [new Student("Nick", 20), new Student("Anne", 21), new Student("Nate", 30)];

function getAllScores() {
    var result = [];
    for(var i = 0, n = students.length; i < n; i ++) {
        result[i] = students[i].score;
    }
    return result;
}

function average() {
    for (var i = 0, result = 0, len = arguments.length; i < len; i++) {
        result += arguments[i];
    }
    return result / len;
}

var scores = getAllScores()

average.apply(null, scores);               // 23.666666666666668

// equivalent to: if scores had 3 items
average(scores[0], scores[1], scores[2]);  // 23.666666666666668

var buffer = {
    state: [],
    append: function() {
        for (var i = 0, n = arguments.length; i < n; i++) {
            this.state.push(arguments[i]);
        }
    }
};

buffer.append("hello, ");
buffer.append("Nickson", " ", "Kaigi", "!");
buffer.append("\n");

// could be written as
buffer.append.apply(buffer, ["Hello, ", "Nickson", " ", "Kaigi", "!", "\n"]);


// A good rule of thumb is that whenever you provide a variable-arity function
// for convenience, you should also provide a fixed-arity version that takes
// an explicit array.
//
// Easy, implement the variadic function as a small wrapper that delegates to
// the fixed-arity version:

function average() {
    return averageOfArray(arguments);
}

// consumers of your functions don't have to use 'apply' which can be
// less readable and often carries a perfomance cost!

// avoid using == with Mixed Types
// == is the non-strict equality
// === is strict

"1.0e0" == { valueOf: function() { return true; } };   // true
// implicit coercion:
// the string "1.0e0" parses as the number 1
// the object is converted to a number by calling 'valueOf' and converting the
// result(true) to a number which produces 1

var today = new Date();

console.log(today.getMonth() + 1);  // remember: month is 0-indexed. January is month 0

// you can easily convert values to numbers explicitly using the Number
// function or the unary '+' operator
var num = "6";
console.log(+num);   // 6


var date = new Date("1999/12/31");
date == "1999/12/31";   // false

// fails because converting a 'Date' objects to a string produces a different
// format that the one used in the example
date.toString();  // "Fri Dec 31 1999 00:00:00 GMT+0300 (East Africa Time)"


function toYMD(date){
    var y = date.getYear() + 1900, // year is 1900-indexed
        m = date.getMonth() + 1,   // month is 0-indexed
        d = date.getDate();
    // remember:
    // condition ? value_if_true: value_if_false
    return y
        + "/" + (m < 10 ? "0" + m : m)
        + "/" + (d < 10 ? "0" + d : d);
}

toYMD(date) === "1999/12/31";  // true

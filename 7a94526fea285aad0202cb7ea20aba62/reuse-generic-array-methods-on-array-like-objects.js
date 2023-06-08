// Reuse generic array methods on array-like objects

/* A good example is a function's 'arguments' object. 'arguments' does not
 * inherit from 'Array.prototype' so we can not simply call 'arguments.forEach'
 * to iterate over each argument. We have to extract a reference to the
 * 'forEach' method object and use its 'call' method
 */

function highlight() {
    [].forEach.call(arguments, function(widget) {
        widget.setBackground("yellow");
    });
}

/* an object is 'array-like' if
 * 1. it has an integer 'length' property in the range 0...2^(32) - 1
 * 2. the 'length' property is greater than the largest index of the object.
 *    an index is an integer in the range 0...2^(32) - 2 whose string
 *    representation is the key of a property of the object
 */

// even a simple object literal can be used to create an array-like object
var arrayLike  = { 0: "a", 1: "b", 2: "c", length: 3};

var result = Array.prototype.map.call(arrayLike, function(s) {
    return s.toUpperCase();
});  // ["A", "B", "C"]

// arrayLike obeys rule 1 and 2

/* Strings act like immutable arrays too, since:
 * 1. they can be indexed
 * 2. their length can be accessed as a 'length' property
 */

var result = Array.prototype.map.call("abc", function(s) {
    return s.toUpperCase();
});  // ["A", "B", "C"]

/* Array 'concat' is not fully generic. While it can be called on an
 * 'array-like' receiver, it tests the [[Class]] of its arguments. If an
 * argument is a true array, its contents are concatenated to the result;
 * if not, the argument is added as a single element
 */

function namesColumn() {
    return ["Names"].concat(arguments);
}

namesColumn("Alice", "Bob", "Chris");  
// book suggests that outcome will be
//
// ["Names", { 0: "Alice", 1: "Bob", 2: "Chris" }]
//
// I expected:
// ["Names, ["A", "B", "C"]]
function namesColumn() {
    return ["Names"].concat([].slice.call(arguments));
}

namesColumn("Alice", "Bob", "Chris");  //  ["Names", "Alice", "Bob", "Chris"]

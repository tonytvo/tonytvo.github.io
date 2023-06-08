// beware of implicit coercions
3 + true;  // 4

// special cases exist where js raises an error
// "hello"(1);   // error: not a function
// null.x;       // error: cannot read property 'x' of null

// in many other cases, js coerces a value to the expected type by following
// various automatic conversion protocols
// the operator + is overloaded to perform either numeric addiditon or string
// concatenation
2 + 3;               // 5
"hello" + " world";  // "hello  world"world"

"2" + 3;        // "23"

2 + "3";        // "23"

1 + 2 + "3";    // "33"

(1 + 2) + "3";  // "33"

1 + "2" + 3;    // "123"

(1 + "2") + 3;  // "123"

"17" * 3;  // 51

"8" | "1"  // 9

// coercions can also hide errors.
// NaN - not a number
var x = NaN;
x === NaN;    //false

isNaN(NaN);  // true

// but other values that are definitely not NaN, yet are nevertheless
// coercible to NaN, are indistinguishable to isNaN:

isNaN("foo");               // true
isNaN(undefined);           // true
isNaN({});                  // true
isNaN({ valueOf: "foo" });  //true


// there's an idiom that is both reliable and concise for testing for NaN
// since NaN is the only JavaScript value that is treated as unequal to itself
// you can always test if a value is NaN by checking it for equality to itself

var a = NaN;
a !== a;           // true

var b = "foo";
b !== b;           // false

var c = undefined;
c !== c;           // false

var d = {};
d !== d;          // false

var e = { valueOf: "foo" };
e !== e;          // false


// as a utility function, though unnecessary
function isReallyNaN(x){
    return x !== x;
}

// objects can be coerced to primitives, often used for converting strings
"the Math object: " + Math; // "the Math object: [object Math]"

"the JSON object: " + JSON; // "the JSON object: [object JSON]"


// objects are converted to strings by implicitly calling their 'toString' method
Math.toString();  // "[object Math]"
JSON.toString();  // "[object JSON]"


// similarly, objects can be converted to numbers via their 'valueOf' method
"J" + { toString: function() { return "S"; } }; // "JS"
2 * { valueOf: function() { return 3; }};       // 6

// things get tricky when you consider that '+' is overloaded
// an object contains both 'toString' and 'valueOf'
// its not obvious which method '+' should call.
// Javascript blindly chooses 'valueOf' over 'toString' which can lead to unexpected behaviour

var obj = {
    toString: function(){
        return "[object MyObject]";
    },
    valueOf: function(){
        return 17;
    }
};

"object: " + obj; // "object: 17"
// its best to avoid 'valueOf'

// truthiness:
// most js values are 'truthy' that is implicitly coerced to true.

// there are exactly seven 'falsy' values
// false, 0, -0, "", NaN, null, undefined

// all other values are truthy

function point(x, y){
    if (!x) {
        x = 320;
    }
    if (!y) {
        y = 240;
    }
    return { x: x, y: y };
}

// this function ignores any falsy arguments, which includes 0
point(0, 0);  // { x: 320, y: 240 }

// the more precise way to check for undefined is to use 'typeof'

function betterPoint(x, y){
    if (typeof x === "undefined") {
        x = 320;
    }
    if (typeof y === "undefined") {
        y = 240;
    }
    return { x: x, y: y };
}
betterPoint();      // { x: 320, y: 240 }
betterPoint(0, 0);  // { x: 0, y: 0 }

// another approach is to compare to 'undefined'
if (x === undefined) { /*do things*/ }

// avoid creating local functions with 'eval'
// 'eval' interprets its arguments as a javascript program, but that program
// runs in the local scope of the caller

function test(x) {
    eval("var y = x;");  // dynamic binding
    return y;
}

test("hello");  // "hello"

// placing an 'eval' in a conditional context brings its variablies into scope
// only if the conditional is executed

var y = "global";
function test(x) {
    if (x) {
        eval("var y = 'local';");
    }
    return y;
}

test(true);   // "local"
test(false);  // "global"

// the code that followed this example is considered unsafe and brittle
// because it gives external callers the power to change the internal scoping
// of the test function
// I wouldn't use this

var y = "global";
function test(src) {
    eval(src);
    return y;
}
test("var y = 'local';");  // "local"
test("var z = 'local';");  // "global"

// a simple way to ensure that 'eval' does not affect outer scopes is to run it in an explicitly nested scope
var y = "global";
function test(src) {
    (function() { eval(src); } )();
    return y;
}

test("var y = 'local';");  // "global"
test("var z = 'local';");  // "global"

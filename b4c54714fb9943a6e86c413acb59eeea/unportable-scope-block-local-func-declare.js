// beware of unportable scoping of block-local function declarations

function f() { return "global"; }

function test(x) {
    function f() { return "local"; }

    var result = [];
    if (x) {
        result.push(f());
    }
    result.push(f());
    return result;
}

// test(true);  // ["local", "local"]
// test(false); // ["local"]


// its an entirely different story if we move 'f' into a local block

function f() { return "global"; }

function test(x) {

    var result = [];
    if (x) {
        // remember that js doesn't have block scope, so f() is 'hoisted' to
        // the encompasing scope i.e. test()
        function f() { return "local"; } 

        result.push(f());
    }
    result.push(f());
    return result;
}

test(true);  // ["local", "local"]
// this results in an error:
// since at runtime, the block that defines f() is not executed, when x = false,
// then js does not bind f to the local function
// Nick -> why doesn't the global f() execute instead??
test(false); // ["local"]

// best way to tackle this is
function f() { return "global"; }

function test(x) {
    var g = f, result = [];
    if (x) {
        g = function () { return "local"; } 

        result.push(g());
    }
    result.push(g());
    return result;
}

test(true);  // ["local", "local"]

test(false);   // ["global"]

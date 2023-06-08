// prefer indirect  'eval' to direct 'eval'
// Most functions have access to the scope where they are defined, and nothing
// else.
// 'eval' has access to the full scope at the point where it is called

var x = "global";
function test() {
    var x = "local";
    return eval("x");  // direct eval
}
test();  // "local"

// executed program hs complete access to the local scope of the caller

// Below, we bind the eval function to a different variable name, and call it
// through the alternate name, causing the code to lose access to any local
// scope
var x = "global";
function test() {
    var x = "local";
    var f = eval;
    return f("x");  // indirect eval
}
test(); // "global"

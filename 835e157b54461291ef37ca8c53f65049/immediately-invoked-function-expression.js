function wrapElements(a) {
    var result = [], i, n;
    for (i = 0, n = a.length; i < n; i++) {
        result[i] = function() { return a[i]; };
    }
    return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
f();  // undefined


// use the 'immediately invoked function expression' IIFE
// pronounced "iffy"
// to create localscope

function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function() {
            var j = i;
            results[i] = function() { return a[j]; };
        })();
    }
    return result;
}

function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function(j) {
            results[i] = function() { return a[j]; };
        })(i);
    }
    return result;
}

// beware of unportable scoping of named function expressions

// The meaning of a JavaScript function changes depending on the context


function double(x) { return x * 2; }

// could either be a 'function declaration' or a 'named function expression'
// the above declaration would create a global function called 'double'

var f = function double(x) { return x * 2; };

// OR using an anonymous function expression
var f = function(x) { return x * 2; };

// benefit of using a named function is that it can be used in recursion e.g.
var f = function find(tree, key) {
    if (!tree) {
        return null;
    }
    if (tree.key === key) {
        return tree.value;
    }
    return find(tree.left, key) || find(tree.right, key);
}

// real benefit of a named function is for debugging

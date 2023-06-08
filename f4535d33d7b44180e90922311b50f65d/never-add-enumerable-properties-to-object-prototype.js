// Never add enumerable properties to 'Object.prototype'
// E.g. 'allkeys'

Object.prototype.allKeys = function() {
    var result = [];
    for (var key in this) {
        result.push(key);
    }
    return result;
};

// this method pollutes even its own results
({a: 1, b: 2, c: 3}).allKeys();  // ["a", "b", "c", "allKeys"]

// it is more convenient to define 'allkeys' as a function rather than a method
function allkeys(obj) {
    var result = [];
    for (var key in obj) {
        result.push(key);
    }
    return result;
}

// ES5 provides a mechanism for doing it more cooperatively
// 'Object.defineProperty'

Object.defineProperty(Object.prototype, "allkeys", {
    value: function() {
        var result = [];
        for (var key in this) {
            result.push(key);
        }
        return result;
    },
    writable: true,
    enumerable: false,
    configurable: true
});

// Whenever you need to add a property that should not be visible to 'for...in'
// loops, 'Object.defineProperty' is your friend

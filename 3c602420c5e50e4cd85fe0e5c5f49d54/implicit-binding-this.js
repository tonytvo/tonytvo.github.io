// recognize them implicit binding of this

function CSVReader(separators) {
    this.separators = separators || [","];
    this.regexp =
        new RegExp(this.separators.map(function(sep) {
            return "\\" + sep[0];
        }).join("|"));
}

CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        return line.split(this.regexp);  // wrong this!
    });
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");  // [["a,b,c"], ["d,e,f"]]
// results in [Array(1), Array(1)]

// the callback passed to 'lines.map' refers to 'this' expecting to extract the
// 'regexp' property of the 'CSVReader' object
//
// But 'map' binds its callback's receiver to the 'lines' array, which doesn't
// have such a property
// therefore: 'this.regexp' is 'undefined'
//
// soln.: similar to 'forEach' example in item 25, the 'map' method of arrays
// takes an optional second argument to use as 'this-binding' for the callback
// Fix: forward the outer binding of 'this'

CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        return line.split(this.regexp);  // wrong this!
    }, this);
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");  // [["a", "b ", "c"], ["d", "e", "f"]]
// results in [Array(3), Array(3)]


// what if 'map' did not accept 'this' as an additional argument?
CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    var self = this; // save a reference to outer this-binding
    return lines.map(function(line) {
        return line.split(self.regexp);  // use outer this
    });
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");  // [["a", "b ", "c"], ["d", "e", "f"]]

// another approach in ES5 is to use the callback function's 'bind' method
// like in item 25
CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        return line.split(this.regexp);
    }.bind(this));  // bind to outer this-binding
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");  // [["a", "b ", "c"], ["d", "e", "f"]]

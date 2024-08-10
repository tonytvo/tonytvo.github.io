// avoid inheriting form standard classes


// a library for operating on file systems might wish to create an abstraction
// of directories that inherits all the behaviour of arrays
function Dir(path, entries) {
    this.path = path;
    for (var i = 0, n = entries.length; i < n; i++) {
        this[i] = entries[i];
    }
}

Dir.prototype = Object.create(Array.prototype);
// wrong to extend Array

// this approach breaks the expected behavior of the length property of arrays:

var dir = new Dir("/tmp/mysite", ["index.html", "script.js", "style.css"]);

dir.length;   // 0

// fails because 'length' property operates specifically on objects that are
// marked internally as 'true' arrays
//
// The ECMAScript standard specifies this as an invinsible 'internal property'
// called [[Class]] - whose value is a simple tag
//
// Array constructor or the [] - [[Class]] is "Array"
//
// instances of 'Dir' have [[Class]] "Object"
//
// Object.prototype.toString queries the internal [[Class]] property of its
// receiver

var dir = new Dir("/", []);
Object.prototype.toString.call(dir);  // "[Object Object]"
Object.prototype.toString.call([]);   // "[Object Array]"

/// better
function Dir(path, entries) {
    this.path = path;
    this.entries = entries;  // array property
}

// Array methods can be redefined on the property by delagating the
// corresponding methods of the entries property

Dir.prototype.forEach = function(f, thisArg) {
    if (typeof thisArg === "undefined") {
        thisArg = this;
    }
    this.entries.forEach(f, thisArg);
};

// therefore: avoid inheriting from
// - Array
// - Boolean
// - Date
// - Function
// - Number
// - RegExp
// - String

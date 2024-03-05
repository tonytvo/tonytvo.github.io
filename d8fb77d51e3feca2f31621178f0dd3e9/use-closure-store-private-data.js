// Use closures to store private data
// Instead of storing the data as properties of the object,
// we store it as variables in the constructor and turn the methods of the
// object into closures that refer to those variables

function User(name, passwordHash) {
    this.toString = function() {
        return "[User " + name + "]";
    };
    this.checkPassword = function(password) {
        return hash(password) === passwordHash;
    };
}

// notice:
// 'toString' and 'checkPassword' methods refer to 'name' and 'passwordHash'
// as variables, rather than as properties of 'this'
//
// An instance of 'User' now contains no instance properties at all, so outside
// code has not direct assess to the name and password hash of an instance of
// 'User'
//
// Downside:
// methods must be placed on the instance object. Refer to item 35

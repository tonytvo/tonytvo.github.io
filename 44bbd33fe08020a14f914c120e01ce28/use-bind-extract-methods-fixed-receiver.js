// use 'bind' to extract methods with a fixed receiver

var buffer = {
    entries: [],
    add: function(s) {
        this.entries.push(s);
    },
    concat: function() {
        return this.entries.join("");
    }
};

var source = ["867", "-", "5309"];
// source.forEach(buffer.add); // error
// fails because 'forEach' uses the global object as the receiver.
// fix, use L17
source.forEach(buffer.add, buffer);
buffer.concat();  // "867-5309"


// not all higher-order functions can accept the extra reciever argument
// Soln. create a local function that makes sure to call buffer.add with the
// appropriate method call syntax
buffer.entries = [];

source.forEach(function(s) {
    buffer.add(s);
});
buffer.concat();  // "867-5309"

// L27 creates a wrapper function tht explicitly calls 'add' as a method of
// buffer. Notice the wrapper function does not refer to 'this'
// ES5 has a library function that achieves the above functionality
buffer.entries = [];
source.forEach(buffer.add.bind(buffer));
buffer.concat();  // "867-5309"

// bear in mind: buffer.add.bind(buffer) creates a 'new' funciton rather than
// modifying the old one, but with its receiver bound to buffer, while the old
// one remains unchanged
buffer.add === buffer.add.bind(buffer);  //false

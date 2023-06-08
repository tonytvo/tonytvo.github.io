// understand the difference between:
//  1. Function
//  2. Method
//  3. Constructor calls


// function call
function hello(username) {
    return "hello, " + username;
}
hello("Polynikes");  // "hello, Polynikes"


// methods in JavaScript are object peroperties that happen to be functions
var obj = {
    hello: function() {
        return "hello, " + this.username;
    },
    username: "Kalistos",
};

obj.hello(); // "hello, Kalistos"

// functions as a constructor
function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

// invoking User with the 'new' operator treats it as a constructor
var u = new User("pkalistos", "0ef33ae791068ec64b502d6cb0191387");

u.name;  // "pkalistos"

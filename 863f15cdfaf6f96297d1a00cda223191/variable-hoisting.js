// understand variable hoisting
//
// Remember: 
// - JavaScript supports 'lexical scoping'. A referece to a variable 'foo' is
//   bound to the nearest scope in which 'foo' was declared.
//
// - JavaScript does not support 'block scoping': variable definations are not
//   scoped to their nearest enclosing statement/block, but rather to their
//   containing function.

// my own version of player object and others
// using a function constructor
function Player(name) {
    this.score = 0;
    this.name = name;
    this.setScore = function(score) {
        this.score = score;
    };
};

var nick = new Player("nick");
nick.setScore(25);

var tom = new Player("tom");
tom.setScore(35);

var newt = new Player("newt");
newt.setScore(15);

var players = [nick, tom, newt];

var nate = new Player("nate");
nate.setScore(5);

function isWinner(player, others) {
    var highest = 0;
    for (var i = 0, n = others.length; i < n; i++) {
        var player = others[i];
        if (player.score > highest) {
            highest = player.score;
        }
    }
    return player.score > highest;
}

// JavaScript variables are 'function-scoped' rather than 'bock-scoped',
// the inner declaration of 'player' simply redeclares a var that was already
// in scope
// Each loop iteration overwrites the same variable, the return statement sees
// 'player' as the last element of 'others' instead of the function's original
// 'player' arg
function trimSection(header, body, footer) {
    for (var i = 0, n = header.length; i < n; i++) {
        header[i] = header[i].trim();
    }
    for (var i = 0, n = body.length; i < n; i++) {
        body[i] = body[i].trim();
    }
    for (var i = 0, n = footer.length; i < n; i++) {
        footer[i] = footer[i].trim();
    }
}

// notice redefination of i and n
// after hoisting, it would be equivalent to
function trimSectionNew(header, body, footer) {
    var i, n;
    for (i = 0, n = header.length; i < n; i++) {
        header[i] = header[i].trim();
    }
    for (i = 0, n = body.length; i < n; i++) {
        body[i] = body[i].trim();
    }
    for (i = 0, n = footer.length; i < n; i++) {
        footer[i] = footer[i].trim();
    }
}

// exception to JavaScript lack of block scopoing is in 'exceptions
function test() {
    var x = "var", result = [];
    result.push(x);
    try {
        throw "exception";
    } catch (x) {
        x = "catch";  // here x is block scoped to the catch only
    }
    result.push(x);
    return result;
}
test(); // ["var", "var"]

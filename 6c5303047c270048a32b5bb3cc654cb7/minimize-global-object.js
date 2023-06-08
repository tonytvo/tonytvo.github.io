// minimize Use of the Global object
//
// Defining global variables pollutes the common namespace shared by everyone,
// introducing the possibility of accidental name collisions.

function averageScore(players) {
    var i, n, sum;  // locals
    sum = 0;
    for (i = 0, n = players.length; i < n; i++) {
        sum += score(players[i]);
    }
    return sum / n;
}

function score(player) {
    var i, n , sum;
    sum = 0;
    for (i = 0, n = player.levels.length; i < n; i++) {
        sum += player.levels[i].score;
    }
    return sum;
}

// JavaScript's global namespace is exposed as a global object - 'this'

this.foo;  //undefined
foo = "global foo";
this.foo;  // "global foo"

// there are two ways to define globals:
// 1. declare it with 'var' in the global space
// 2. add it to the global object
var foo = "global foo";
console.log(foo);     // "global foo"
this.foo = "changed";
console.log(foo);     // "changed"

// item 9: always declare local variables
// avoid unintentional global variables
// forgetting to declare a local variable silently turns it into a global var
function swap(a, i, j) {
    // not adding 'var' before variable name, leads to accidental creation of a
    // global var
    temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

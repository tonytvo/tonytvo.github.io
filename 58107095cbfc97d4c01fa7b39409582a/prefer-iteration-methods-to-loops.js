// prefer iteration methods to loops

for (var i = 0; i <= n; i++) { console.log(); }     // extra end iteration

for (var i = 1; i < n; i++) { console.log(); }      // missing first iteration

for (var i = n; i => 0; i--) { console.log(); }     // extra start iteration

for (var i = n - 1; i > 0; i--) { console.log(); }  // missing last iteration

/* many ways to F* it up. Use 'Array.protototype.forEach' instead
 * instead of writing
 */

for (var i = 0, n = players.length; i < n; i++) {
    players[i].score++;
}

// write

players.forEach(function(p) {
    p.score++;
});

/* concise, readable, eliminates the termination condition and any mention of
 * array indices.
 */

/* its common to build a new array for doing something to each element of
 * another array. Do this with a loop:
 */

var trimmed = [];
for (var i = 0, n = input.length; i < n; i++) {
    trimmed.push(input[i].trim());
}

// using forEach
var trimmed = [];
input.forEach(function(s) {
    trimmed.push(s.trim());
});

/* this is so common that ES5 introduced 'Array.prototype.map'
 */

var trimmed = input.map(function(s) {
    return s.trim();
});

/* its also common to compute a new array containing only some of the elements
 * of an existing array. 'Array.prototype.filter' takes a 'predicate'
 * (a function that produces a truthy value if the element should be kept in
 * in the new array, and a falsy value if the element should be droppped)
 */

listings.filter(function(listing) {
    return listing.price >= min && listing.price <= max;
});

// we could define our own

function takeWhile(a, pred) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        if (!pred(a[i], i)) {
            break;
        }
        result[i] = a[i];
    }
    return result;
}

var prefix = takeWhile([1, 2, 3, 4, 8, 16, 32], function(n) {
    return n < 10;
});  // [1, 2, 3, 4, 8]

/* loops are better than iteration functions for abnormal control flow
 * operations such as 'break' and 'continue'
 *
 * It would be akward to attempt to implement 'takeWhile' using 'forEach'
 *
 * We could use an internal exception to implement the early termination of
 * the loop, but this would be awkward and likely inefficient
 *
 * Once an abstraction becomes more verbose than the code it is replacing,
 * it's pretty sure sighn that the cure is worse than the disease.
 *
 * Alternatively, ES5 array methods 'some' and 'every' can be usedd as loops
 * that may terminate early... but they were not created for this purpose.
 *
 *
 * 'some' returns a boolean indicating whether its callback returns a 'truthy'
 * value for any one of the array elements
 */

[1, 10, 100].some(function(x) { return x > 5; });  // true
[1, 10, 100].some(function(x) { return x < 0; });  // false

/* 'every' returns a boolean indicating whether its callback returns a 'truthy'
 * value for all of the elements:
 */

[1, 2, 3, 4, 5].every(function(x) { return x > 0; });  // true
[1, 2, 3, 4, 5].every(function(x) { return x < 3; });  // false

/* both 'some' and 'every' are 'short-circuiting':
 * - 'some' returns immediately without processing any more elements once any
 * element produces a 'truthy' value
 * - 'every' returns immediately if its callback produces a 'falsy' value
 *
 * This behavior makes these methods useful as a variant of 'forEach' that can
 * terminate early.
 */
function takeWhile(a, pred) {
    var result = [];
    a.every(function(x, i) {
        if (!pred(x)) {
            return false;  // break
        }
        result[i] = x;
        return true;  // continue
    });
    return result;
}

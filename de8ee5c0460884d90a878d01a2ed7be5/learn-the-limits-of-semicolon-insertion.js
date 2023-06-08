// learn the limits of Semicolon insertion
// See semicolon war between @fat and Crockford -> https://github.com/twbs/bootstrap/issues/3057
// Always use semicolons: https://google.github.io/styleguide/javascriptguide.xml#Semicolons
// Brendan Eich: https://brendaneich.com/2012/04/the-infernal-semicolon/

// RULES
// 1. Semicolons are only ever inserted before a } token, after one or more
//    newlines, or at the end of the program output
//
// 2. Semicolons are only ever inserted when the next input token cannot be
//    parsed


// this works thanks to 'automatic semicolon insertion'
function Point(x, y) {
    this.x = x || 0
    this.y = y || 0
}

Point.prototype.isOrigin = function() {
    return this.x === 0 && this.y === 0
}

function square(x) {
    var n = +x
    return n * n
}

function area(r) { r = +r; return Math.PI * r * r }

function add1(x) { return x + 1 }

// I have cut this section short! General wisdom dictates that you always use semicolons.

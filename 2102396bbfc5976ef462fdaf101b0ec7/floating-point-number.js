// Do not concatenate 'strict' files and 'unstrict' files
"use strict";

// const variables are immutable
const PI = 3.141592653589793;

// All numbers in js are double precision floating point numbers AKA doubles
typeof 17;    // number

typeof 98.6;  // number

typeof -2.1;  // number

// most arithmetic operators work with integers, real numbers, or a combination
// of the two
0.1 * 1.9; // 0.19

-99 + 100; // 1

21 - 12.3; // 8.7

2.5 / 5;   // 0.5

21 % 8     // 5

// bitwise arithmetic operators are special
8 | 1; // 9

(8).toString(2); // 1000
(1).toString(2); // 1

// toString specifies the radix, 2, indicating binary representation
// bitwise OR combines the bit sequences by keeping any 1 bits found in either
// input
// 8 as a 32bit integer is
// 00000000000000000000000000001000

// 1 as a 32bit integer is
// 00000000000000000000000000000001

// OR results in 1001 which is 9 in decimal
// 00000000000000000000000000001001
// leading zero's are unnescessary since they do not alter the result

parseInt("1001", 2);  //9


// take caution when using floats, as rounding errors can be cumulative
0.1 + 0.2;  // 0.30000000000000004

// real numbers are associative, but its not always the case in js
// (x + y) + z = x + (y + z)
(0.1 + 0.2) + 0.3;  // 0.6000000000000001 
0.1 + (0.2 + 0.3);  // 0.6

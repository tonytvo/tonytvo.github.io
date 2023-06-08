// Support Method Chaining
/* Stateless APIs offer flexibility to build compound operations out of
 * smaller ones. Example: the 'replace' method of strings
 */
function escapeBasicHTML(str1) {
    var str2 = str1.replace(/&/g, "&amp;");
    var str3 = str2.replace(/</g, "&lt;");
    var str4 = str3.replace(/>/g, "&gt;");
    var str5 = str4.replace(/"/g, "&quot;");
    var str6 = str5.replace(/'/g, "&apos;");
    return str6;
}

function escapeBasicHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&apos;")
}

/* this style of repeated method calls is known as 'method chaining'
 * the second version of 'escapeBasicHTML' is much more concise than saving
 * each intermediate result to an intermediate variable
 * Eliminating the temporary variables makes it clearer to the readers of the
 * code that the intermediate results are only important as a step along the
 * way to the final result
 */

// another example

var users = records.map(function(record) {
                        return record.username;
                    })
                    .filter(function(username) {
                        return !!username;
                    })
                    .map(function(username) {
                        return username.toLowerCase();
                    });

/* takes an array of user records
 * - extracts the username property of each
 *   record
 * - filters out any empty usernames
 * - converts the usernames to lower-case strings
 */ 

/* in a stateful setting, design your methods that update an object to return
 * 'this' instead of 'undefined' making it possible to perform multiple updates
 * on the same object via a sequence of chanined method calls
 */

element.setBackgroundColor("yellow")
       .setColor("red")
       .setFontWeight("bold");

/* method chaining for stateful API is sometimes know as the 'fluent style'
 */

/* when combining stateless methods that retrieve objects with update methods,
 * method chaining can make for very concise and readable code. jQuery
 * popularized this approach with a set of (stateless) methods for "querying"
 * a web page for UI elements and a set of (stateful) methods for updating
 * those elements
 */

$("#notification")                 // find notification element
    .html("Server not responding") // set notification msg
    .removeClass("info")           // remove one set of styling
    .addClass("error");            // add more styling

/* the following stateful calls
 *  - html
 *  - removeClass
 *  - addClass
 * support the fluent style by returning the same object
 */

// for users uncomfortable with stylish code
var element = $("#notification");
element.html("Server not responding");
element.removeClass("info");
element.addClass("error");

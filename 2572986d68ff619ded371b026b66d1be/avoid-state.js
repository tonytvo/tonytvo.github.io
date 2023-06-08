// Avoid unnescessary state
/* APIs are either 'stateful' or 'stateless'
 * - Stateless: provides functions or methods whose behavior depends only on
 *   their inputs, not on the changing state of the program
 * - "foo".toUpperCase() will always produce "FOO" --- STATELESS
 * - methods of a 'Date' object by contrast are stateful
 * - A famous stateful API is the web's 'Canvas' library
 *   A program can draw text onto a canvas using the 'fillText' method
 * - See declaration of 'canvas' element in index.html
 */
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

//c.fillStyle = 'green';
//c.fillRect(10, 10, 150, 100);
// 'fillRect' places its top-left corner at (10, 10) and gives it a size of
// 150 units wide and 100 tall

//c.fillText("hello, world!", 75, 25);
// other attributes of the drawn text are specified separately by changing the
// internal state of the canvas
c.fillStyle = "blue";
c.font = "24pt serif";
c.textAlign = "center";
// filltext(text, x, y [, max-width])
c.fillText("hello, world!", 100, 25);

/* a less stateful API might look like this
 *
 * c.fillText("hello, world!", 100, 25, {
 *     fillStyle: "blue",
 *     font: "24pt serif",
 *     textAlign: "center"
 * });
 *
 * A stateful API requires modifying the internal state of a canvas in order to
 * do anything custom and this causes one drawing operation to affect another
 * one, even if they have nothig to do with each other.
 *
 * If you want to do a drawing operation that uses the default color after
 * changing it, you have to specify the default explicitly
 */

c.fillText("text 1", 50, 60);  // default color
c.fillStyle = "blue";
c.fillText("text 2", 50, 90);  // blue
c.fillStyle = "black";
c.fillText("text 3", 50, 120);  // blue

/* using an INI file to demonstrate:
 *
 * [Host]
 * address=172.0.0.1
 * name=localhost
 * [Connections]
 * timeout=10000
 *
 */

// a statefull approach might provide a 'setSection' method
var ini = INI.parse(src);
ini.setSection("Host");
var addr = ini.get("address");
var hostname = init.get("name");

ini.setSection("Connection");
var timeout = ini.get("timeout");
var server = new Server(addr, hostname, timeout);

// a stateless API approach

var ini = INI.parse(src);
var server = new Server(ini.Host.address,
                        ini.Host.name,
                        ini.Connection.timeout);


// Store methods on Prototypes
// We could have easily defined the User class from 'Item 30' as follows

function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
    this.toString = function () {
        return "[User " + this.name + "]";
    };
    this.checkPassword = function(password) {
        return hash(password) === this.passwordHash;
    };
}

// if we created 3 user instances
var u1 = User("u1", "ZXCVB");
var u2 = User("u2", "UIOP");
var u3 = User("u3", "QWERTY");

/* Instead of sharing the  'toString' and 'checkPassword' methods via the
 * 'prototype', each instance contains a copy of both methods for a total of
 * six function objects
 *
 * Storing methods on instance objects
 * -----------------------------------
 *
 *
 *                    User.prototype
 *                  ----------------------
 *                  |                    |
 *        --------| ---------------------- |-----------
 *        |                    |                      |
 *        |                    |                      |
 *     prototype            prototype              prototype
 *        |                    |                      |
 * ------------------     ------------------      ----------------
 * |  .toString     |     |  .toString     |      |  .toString     |
 * |  .checkPassword|     |  .checkPassword|      |  .checkPassword|
 * |  .name         |     |  .name         |      |  .name         |
 * |  .passwordHash |     |  .passwordHash |      |  .passwordHash |
 * ------------------     ------------------      ------------------
 *
 *
 * Storing methods on a prototype object
 * -------------------------------------
 *
 *
 *                      User.prototype
 *                  ----------------------
 *                  |  .toString         |
 *                  |  .checkPassword    |
 *        --------| ---------------------- |-----------
 *        |                     |                      |
 *        |                     |                      |
 *     prototype             prototype              prototype
 *        |                     |                      |
 * ------------------     ------------------      ----------------
 * |  .name         |     |  .name         |      |  .name         |
 * |  .passwordHash |     |  .passwordHash |      |  .passwordHash |
 * ------------------     ------------------      ------------------
 */

// Prefer 'Object.getPrototypeOf' to '__proto__'
// ES5 introduced 'Object.getPrototypeOf' as the standard API

var empty = Object.create(null);  // object with no prototype
"__proto__" in empty;             // false (in some environments, like mine)


Object.getPrototypeOf(empty);     // null

// item 32:
// Never modify '__proto__' if your env supports it

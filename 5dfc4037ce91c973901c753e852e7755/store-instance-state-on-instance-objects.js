// Store instance state only on instance objects

function Tree(x) {
    this.value = x;
}

Tree.prototype = {
    children: [],               // should be instance state
    addChild: function(x) {
        this.children.push(x);
    }
};

// consider what happens when we try to construct a tree

var left = new Tree(2);
left.addChild(1);
left.addChild(3);

var right = new Tree(6);
right.addChild(5);
right.addChild(7);

// top refers to window.top
// Where the window.parent property returns the immediate parent of the current
// window, window.top returns the topmost window in the hierarchy of window objects.
//
// top === window.top; // true

var myTop = new Tree(4);
myTop.addChild(left);
myTop.addChild(right);

myTop.children;  // [1, 3, 5, 7, left, right]

// each call to 'addChild' appends a value to 'Tree.prototype.children'
// which contains the nodes in the order of 'any' calls to 'addChild' anywhere

// correct version
function Tree(x) {
    this.value = x;
    this.children = [];  // instance state
}

Tree.prototype = {
    addChild: function(x) {
        this.children.push(x);
    }
};

var left = new Tree(2);
left.addChild(1);
left.addChild(3);

var right = new Tree(6);
right.addChild(5);
right.addChild(7);

var myTop = new Tree(4);
myTop.addChild(left);
myTop.addChild(right);

myTop.children;  // 

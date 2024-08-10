// Call SuperClass contructors form Subclass constructors
// 
// Scene Graph: is a collection of objects describing a scene in a visual
// program such as a game or graphical simulation.
//
// A simple scene contains a collection of all of the objects in the scene,
// known as 'Actors', a table of preloaded image data for the actors and a
// reference to the underlying graphics display, often known as the 'context'

function Scene(context, width, height, images) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.images = images;
    this.actors = [];
}

Scene.prototype.register = function(actor) {
    this.actors.push(actor);
};

Scene.prototype.unregister = function(actor) {
    var i = this.actors.indexOf(actor);
    if (i >= 0) {
        this.actors.splice(i, 1);
    }
};

Scene.prototype.draw = function() {
    this.context.clearRect(0, 0, this.width, this.height);
    for (var a = this.actors, i = 0, n = a.length;
        i < n;
        i++) {
        a[i].draw();
    }
};

// actors inherit from a base 'Actor' class
function Actor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    scene.register(this);
}

Actor.prototype.moveTo = function(x, y) {
    this.x = x;
    this.y = y;
    this.scene.draw();
};

Actor.prototype.exit = function() {
    this.scene.unregister(this);
    this.scene.draw();
};

// assume that every actor has a 'type' field that can be used to look up its
// image in the image table

Actor.prototype.draw = function() {
    var image = this.scene.images[this.type];
    this.scene.context.drawImage(image, this.x, this.y);
};

// determine an actor's size from its image data
Actor.prototype.width = function() {
    return this.scene.images[this.type].width;
};

Actor.prototype.height = function() {
    return this.scene.images[this.type].height;
};

// we implement specific types of actors as subclasses of 'Actor'

function SpaceShip(scene, x, y) {
    Actor.call(this, scene, x, y);
    this.points = 0;
}

// In order for 'SpaceShip' to be a proper subclass of 'Actor', its prototype
// must inherit from 'Actor.prototype'
// Use ES5 'Object.create'

SpaceShip.prototype = Object.create(Actor.prototype);

SpaceShip.prototype.type = "spaceShip";

SpaceShip.prototype.scorePoint = function() {
    this.points++;
};

SpaceShip.prototype.left = function() {
    this.moveTo(Math.max(this.x - 10, 0 ), this.y);
};


SpaceShip.prototype.right = function() {
    var maxWidth = this.scene.width - this.width();
    this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
};

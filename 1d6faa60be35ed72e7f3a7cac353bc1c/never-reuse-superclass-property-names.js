// never reuse superclass property names
// refer to item_38


function Actor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.id = ++Actor.nextID;
    scene.register(this);
}

Actor.nextID = 0;


function Alien(scene, x, y, direction, speed, strength) {
    Actor.call(this, scene, x, y);
    this.direction = direction;
    this.speed = speed;
    this.strength = strength;
    this.damage = 0;
    this.id = ++Alien.nextID;  // conflicts with actor id
}

Alien.nextID = 0;

// both classes attempt to write to an instance property called 'id'
// the property is stored on instance objects and named with a string
//
// if two classes in an inheritance hierarchy refer to the same property name
// they will refer to the same property
//
// subclasses must always be aware of all properties used by their superclasses
// Soln. use distinct property names


function Actor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.actorID = ++Actor.nextID; // distinct
    scene.register(this);
}


Alien.nextID = 0;


function Alien(scene, x, y, direction, speed, strength) {
    Actor.call(this, scene, x, y);
    this.direction = direction;
    this.speed = speed;
    this.strength = strength;
    this.damage = 0;
    this.alienID = ++Alien.nextID;  // distinct
}

Alien.nextID = 0;

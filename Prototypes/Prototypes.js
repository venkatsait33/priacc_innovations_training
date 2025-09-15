// Prototypes in JavaScript
// Task: Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherits from Animal using prototypes.

//     The Dog constructor should add a method bark() that returns 'Woof!'.Demonstrate the prototype chain between Dog and Animal.
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    return 'Animal speaking'
}

function Dog(name, bread) {
    Animal.call(this, name);
    this.bread = bread;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    return 'Woof!'
}

const myDog = new Dog('Buddy', 'Golden Retriever');

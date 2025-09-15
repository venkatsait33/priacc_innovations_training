// Functional Constructor and Errors
// Task 1: Create a Functional Constructor

// Create a functional constructor Person that takes name and age as parameters.Add a method greet() to the constructor that returns "Hello, my name is [name]".



//     Task 2: Handle Errors

// Modify the Person constructor to throw an error if the age is not a positive number.


function Person(name, age) {

    if (typeof age !== 'number' || age <= 0 || Number.isNaN(age)) {
        throw new Error('Age must be a positive number')
    }

    this.name = name;
    this.age = age;

    this.greet = function () {
        return `Hello, my name is ${this.name}`;
    }
}

const alice = new Person('Sai', 25)
console.log(alice.greet())

try {
    const bob = new Person('Bob', 30);
    console.log(bob.greet()); // "Hello, my name is Bob"
} catch (err) {
    console.error(err.message);
}

// ❌ Example: Invalid age
try {
    const charlie = new Person('Charlie', -5);
} catch (err) {
    console.error(err.message); // "Age must be a positive number"
}

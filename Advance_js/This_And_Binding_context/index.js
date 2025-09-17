// THIS and Binding Context
// Task 1: Bind the Correct Context

// Create an object person with properties name and a method introduce().Use the bind() method to ensure the method works correctly when passed to another function.



// Task 2: Using call() to Invoke a Function with Different Contexts

// Write a function introduce() that uses the this keyword to introduce a person by name.Then, invoke introduce() using call() to introduce different people with the same function.



// Task 3: Using apply() to Pass Arguments with Context

// Create a function sum() that accepts two numbers and uses this to access a multiplier value.Then, invoke sum() with different contexts using apply(), passing the numbers as an array.

// Task 1
const person = {
    name: 'Alice',
    introduce() {
        return `Hi, my name is ${this.name}`;
    },
};

// ✅ Using bind to keep context
const boundIntroduce = person.introduce.bind(person);
console.log(boundIntroduce()); // "Hi, I'm Alice"


// Task 2
function introduce() {
    return `Hello, my name is ${this.name}`;
}

const person1 = { name: 'Bob' };
const person2 = { name: 'Carol' };

console.log(introduce.call(person1)); // "Hello, my name is Bob"
console.log(introduce.call(person2)); // "Hello, my name is Carol"


// Task 3
function sum(a, b) {
    return (a + b) * this.multiplier;
}

const context1 = { multiplier: 2 };
const context2 = { multiplier: 5 };

console.log(sum.apply(context1, [3, 4])); // (3+4)*2 = 14
console.log(sum.apply(context2, [1, 2])); // (1+2)*5 = 15

// Closures in JavaScript
// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.



//     Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function.The returned function allows calling fn only once within a limit time in milliseconds.If it is called again before the limit is reached, it should return "Rate limit exceeded".



//     Task 3: Memoization Function

// Write a function memoize(fn) that returns a memoized version of fn.The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.

function createCounter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    }
}

const counter = createCounter();
console.log(counter());

function rateLimiter(fn, limit) {

    let lastCallTime = 0;

    return function (...args) {
        const now = Date.now();
        if (now - lastCallTime < limit) {
            return 'Rate limit exceeded';
        }

        lastCallTime = now;
        return fn(...args);

    }
}

const sayHello = () => 'Hello';
const limitedHello = rateLimiter(sayHello, 2000);

console.log(limitedHello()); // "Hello!"
console.log(limitedHello()); // "Rate limit exceeded" (if within 2s)
setTimeout(() => console.log(limitedHello()), 2500); // "Hello!" after 2.5s

function memoize(fn) {

    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }

}


function slowAdd(a, b) {
    console.log('Computing....');
    return a + b
}


const memoizedAdd = memoize(slowAdd);
console.log(memoizedAdd(2, 3)); // "Computing..." then 5
console.log(memoizedAdd(2, 3)); // returns cached 5, no "Computing..."
console.log(memoizedAdd(4, 3)); // "Computing..." then 7
// Encapsulation, Polymorphism, Abstraction, and Getters / Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance.Add methods deposit(amount) and withdraw(amount).Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



//     Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

// Task 1
class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error('Balance cannot be negative')
        }
        this._balance = amount;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error('Deposit must be positive');
        this._balance += amount;
        return this._balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error('Withdraw must be positive');
        if (amount > this._balance) throw new Error('Insufficient funds');
        this._balance -= amount;
        return this._balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);         // balance = 150
account.withdraw(20);        // balance = 130
console.log(account.balance); // 130
account.balance = 200;       // uses setter to update
console.log(account.balance);


// Task 2
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

const shapes = [
    new Shape(),
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(s => {
    console.log(`${s.constructor.name} area:`, s.area());
});

class BankAccount {
    constructor(initialBalance = 0) {
        this._balance = initialBalance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Balance must be a non-negative number');
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

// Export for tests
module.exports = { BankAccount, Shape, Circle, Rectangle };

const { BankAccount, Shape, Circle, Rectangle } = require('./bankAndShapes');

describe('BankAccount', () => {
    test('initial balance is set correctly', () => {
        const account = new BankAccount(100);
        expect(account.balance).toBe(100);
    });

    test('deposit increases balance', () => {
        const account = new BankAccount(50);
        account.deposit(25);
        expect(account.balance).toBe(75);
    });

    test('withdraw decreases balance', () => {
        const account = new BankAccount(100);
        account.withdraw(40);
        expect(account.balance).toBe(60);
    });

    test('cannot withdraw more than balance', () => {
        const account = new BankAccount(30);
        expect(() => account.withdraw(40)).toThrow('Insufficient funds');
    });

    test('setter prevents negative balance', () => {
        const account = new BankAccount(10);
        expect(() => { account.balance = -5; })
            .toThrow('Balance must be a non-negative number');
    });
});

describe('Shapes Polymorphism', () => {
    test('Shape area is 0', () => {
        const s = new Shape();
        expect(s.area()).toBe(0);
    });

    test('Circle area is correct', () => {
        const c = new Circle(5);
        expect(c.area()).toBeCloseTo(Math.PI * 25);
    });

    test('Rectangle area is correct', () => {
        const r = new Rectangle(4, 6);
        expect(r.area()).toBe(24);
    });
});

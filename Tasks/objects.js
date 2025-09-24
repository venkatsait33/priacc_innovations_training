// 1 => Create a Simple Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person.name);

// 2 =>Add and Delete Properties

const car = {
    brand: 'Tesla'
}
car.model = 'Model S';
car.year = 2021;
console.log(car);

delete car.year
console.log(car);

// 3 => Object with Methods
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
}

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

// 4 =>Nested Objects
const student = {
    name: 'John',
    age: 20,
    subjects: ['Math', 'English', 'Science'],
    getDetails: function () {
        return `Name: ${this.name}, Age: ${this.age}, Subjects: ${this.subjects.join(', ')}`;
    }
}

console.log(student.subjects);
console.log(student.getDetails());

//  5 => Looping Through Objects
const user1 = { id: 1, name: 'Alice', role: "Admin" }
for (let key in user1) {
    console.log(key, user1[key]);
}

// 6 =>Constructor Function

function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("1984", "George Orwell");

console.log(book1.title, "-", book1.author);
console.log(book2.title, "-", book2.author);

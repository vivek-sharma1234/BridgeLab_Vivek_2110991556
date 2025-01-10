//2. Practise Question 

class Person {
    greet() {
        return "Hello!";
    }
}

class Employee extends Person {
    greet() {
        return "Hello, I am an employee!";
    }
}

let person = new Person();
let employee = new Employee();
console.log(person.greet());
console.log(employee.greet()); 
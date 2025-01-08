class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
        
    }
}

//Creating the instance
const person1= new Person("Rohan",30);
person1.greet();

//Key Features of Classes
//Inheritance: Classes can extend other classes to reuse and specialize behavior.
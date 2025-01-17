//A prototype is a mechanism by which objects in JavaScript can inherit properties and methods from other objects. Every JavaScript object has an internal link ([[Prototype]]) to another object, called its prototype.

function Person(name){
    this.name=name;
}
Person.prototype.greet=function(){
    console.log(`hello,my name is ${this.name}`);
    
};

const person1= new Person("VIvek");
const person2= new Person("Rohit");

person1.greet();
person2.greet();//Here, both person1 and person2 share the greet method from Person.prototype.


////////////////////////ProtoType Chaining////////////////////////

//If a property or method is not found on an object, JavaScript looks up the prototype chain for it. This chain continues until it reaches null.
const parent ={
    sayHi:function(){
        console.log("Hi this is vivek sharma");
        
    },
};
const child = Object.create(parent);
child.sayHi();

//////////////inheritance using prototype///////////////\
const parent1= {
    greet(){
        console.log("Hello the parent");
    },

    print(){
        console.log("printing");
        
    }
};
const child1 = Object.create(parent1);
child1.greet();
child1.print();
child1.sayBye= function(){
    console.log("Bye from child");
    
}
child1.sayBye();
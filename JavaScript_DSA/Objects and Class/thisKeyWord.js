//it refers to the object that is currently excuting the function.
//its values depends on how and where the function is called.

//In Global Scope:
console.log(this);

//inside the object 
//Refers to the object that owns the method.
const obj={
    name: "Vivek",
    greet:function(){
        console.log(this.name);
        
    }
};
obj.greet();

//In a function
function sayName(){
    console.log(this);
    
}
sayName();

//IN a ConstructorFunction
function person(name){  
    this.name=name;

}
const p = new Person("Vivek");
console.log(p.name);

//In a Arrow Function
//this is lexically bound (inherits this from the surrounding scope).

const obj1 = {
    name:"Vivek",
    greet:()=>console.log(this.name)
    
};
obj.greet();//undefined



///////Constructor
//A constructor in js is a function used to create and initialize objects.it is typically called with the new Operator.

function Person(name,age){
    this.name=name;
    this.age= age;
}
const person1= new Person("Vivek",32);
console.log(person1.name);


//New Operator is used to create an instance of an object using a constructor function.
//how it works:
//A new empty object is created.
// The prototype of the constructor function is set as the prototype of the new object.
// this is assigned to the new object.
// The function body executes.
// The newly created object is returned unless the constructor explicitly returns another object.


function Person(name){
    this.name= name;
}
const p2= new Person("Vivek");
console.log(p.name);


const obj= {name:"Vivek",age:30};
//object.keys
console.log(Object.keys(obj));
//Object.values
console.log(Object.values(obj));
//Object.entries()
console.log(Object.entries(obj)); 
//Object.assign
const target = {};
const source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); 

//Obj.freeze
Object.freeze(obj);
console.log("Rohan");

//Object.seal
Object.seal(obj);
obj.age=34;// Error: Cannot add new properties
obj.name= "Vivan";//Works

//Object.Create
const proto = { greet: function() { console.log("Hello!"); } };
const obj1 = Object.create(proto);
obj1.greet(); // Hello!
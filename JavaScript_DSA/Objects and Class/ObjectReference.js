const obj1={name:"Vivek"};
const obj2=obj1; //obj2 reference of the obj1
obj2.name= "Rohan";
console.log(obj1.name);
console.log(obj2.name);

//to avoid Modification
//shollow Copy 
const obj3= {name: "Rohit",age:25};
const obj4={...obj3};
obj4.name= "Mohit";
console.log(obj3.name);
console.log(obj4.name);

//Deep copy
const obj5 = { name: "Vivek", details: { age: 25 } };
const obj6 = JSON.parse(JSON.stringify(obj5)); // Deep copy using JSON

obj6.details.age = 30;

console.log(obj5.details.age); // 25
console.log(obj6.details.age); // 30

//shallow Copy: Copies only the top properties 
//methods: Object.assign
const obj1 = { name: "Vivek", age: 25 };
const obj2 = Object.assign({}, obj1);
const obj3 = { ...obj1 };

//deep copy =>
const obj4 = { name: "Vivek", details: { age: 25 } };
const obj5 = JSON.parse(JSON.stringify(obj4));
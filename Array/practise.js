//shalo copy 
let obj1={
    name:"Vivek",
    age:{
        sum:20,
        sub:30
    }
};

let obj2 = JSON.parse(JSON.stringify(obj1)); 
console.log(obj1);

obj2.age.sum=34;

console.log(obj1);
console.log(obj2);

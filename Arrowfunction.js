// 1.for each loop:The forEach method executes a provided function once for each array element.
 const numbers1= [1,2,3,4,5];
 numbers1.forEach(num =>{ 
    console.log(num * 2);//multiple each number by 2  // 
 })


//2.filter the element from the list :The filter method creates a new array with elements that pass a condition.
const numbers = [1,2,3,4,5];
const evenNumber = numbers.filter(num=>num%2==0);
    console.log(evenNumber);  


//reduce:The reduce method executes a reducer function on each element of the array, resulting in a single output value.

const number4=[1,2,3,4,5];
const sum= numbers.reduce((accumulator, currentValue)=>{return accumulator+currentValue},0);
console.log(sum);


//3.  map:
 const numbers3 = [1,2,3,4,5];
const squareNumber= numbers.map(num =>num*num);
     console.log(squareNumber);
 
     
//4..set: A Set is a collection of unique values.
const mySet =new Set ([1,2,2,4]);
mySet.add(5);
console.log(mySet);


//WeakSet: it is similar to set but only stores objects, not primitive values.
const weakSet= new WeakSet();
const obj1={name:"UnderOfficer"};
const obj2= {age:21};

weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1));


//WeakMap:A WeakMap is a collection of key-value pairs where the keys are objects only, and values can be of any type.
const weakMap= new WeakMap();
const obj3 = {id:1};
const obj4 = {id:2};

weakMap.set(obj3, "Object 1 Data");
weakMap.set(obj4, "Object 2 Data");

console.log(weakMap.get(obj3));
console.log(weakMap.get(obj4));


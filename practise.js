let arr= ["Vivek",1,"Rohit","2","Rohan","0",""];
let typeConvrsion=arr.map((value)=>{
   let num= Number(value);
   if(Number.isInteger(num)){
       return true;
   }
   return Boolean(value);
});

console.log(typeConvrsion);

////recursion- it is programming in which a function calls itself in order to solve the problem.

////1.1Using recusion- 
function factorial(n){
   if(n<=1){
       return 1;
   }
   return n *factorial(n-1);
}
console.log(factorial(4));

////1.2 tail recusion-
function factorialTail(n, acc=1){
   if(n<=1){
       return acc;
   }
   return factorialTail(n-1,n*acc);    
   
}

console.log(factorialTail(5));

//REst parameters

function sum(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0);

}
console.log(sum(1,2,3,4));
console.log(sum(3,4,5,6));


//Coping Arrays
const arr1= [1,2,3,4];
const arr2=[...arr1];
console.log(arr2);

//combining Arrays\
const arr3= [1,2,3,4];
const arr4= [3,4,5,6];
const union=[...arr3,...arr4];
console.log(union);

//Spreading String 
const str1="Hello";
const chars= [...str1];
console.log(chars);


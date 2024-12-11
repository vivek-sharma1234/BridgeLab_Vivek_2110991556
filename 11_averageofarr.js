//11. Calculate the average of the numbers in an array of numbers
const arr= [10,20,30,40];
const result= arr.reduce((acc,curr)=>acc+curr/arr.length,0);
console.log(result);



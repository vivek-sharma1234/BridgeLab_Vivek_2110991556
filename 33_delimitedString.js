//33. Calculate the sum of numbers received in a comma delimited string
let a="65,4,3,6,7,2";
let b= a.split(",");
let sum=b.reduce((acc,num)=>acc+Number(num),0);
console.log(sum);

let sum=0;
for(let i=1;i<=10;i++){
    
    sum+=i;
    
    
}
console.log(sum);

//reduce methods:
console.log("Using the reduce methods:");

const number=[1,2,3,4,5,6,7,8,9,10];
const result=number.reduce((acc,curr)=>acc+curr,0);
console.log(result);


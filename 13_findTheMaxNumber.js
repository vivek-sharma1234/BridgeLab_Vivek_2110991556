//13. Find the maximum number in an array of numbers

const arr=[10,4,45,35,20];
function maxNumber(){
    return Math.max(...arr);
    
}console.log(maxNumber(arr));

//alternate
function numberMax(number){
    let max=number[0];
    for(let i=1;i<number.length;i++){
        if(number[i]>max){
            max = number[i];
        }
    }return max;
}
console.log(numberMax([11,2,22,78,65]));

//30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function StringNumber(a,b){
    let c=Number(a);
    let d=Number(b);
    let e=c+d;
    let result=String(e);
    return result;
}let a="123";
let b="456";
console.log(StringNumber(a,b));

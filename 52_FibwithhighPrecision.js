//52. Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n){
    let a=0n;b=1n;
    for(i=2;i<=n;i++){
        let t=a+b;
        a=b;
        b=t;
    }
    return b;
}
let result=fibonacci(500);
console.log(result.toString());

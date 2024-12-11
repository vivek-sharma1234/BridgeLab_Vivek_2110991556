//6. Calculate 10!
function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);

}
console.log(factorial(10));

//by for loop
let fact=1;
for(let i=1;i<=10;i++){
    fact*=i;
    
}
console.log(fact);


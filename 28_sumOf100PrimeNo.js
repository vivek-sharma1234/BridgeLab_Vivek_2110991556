//28. Calculate the sum of first 100 prime numbers and return them in an array

function PrimeNumber(n){
    if(n<2){
        return false;
    }
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }return true; 
}

function sumNumber(n,p){
    let prime=[];
    let c=n+2;
    while(prime.length<p){
        if(PrimeNumber(c)){
            prime.push(c);
        }
        c++;
    }
    return prime;
}
let n=0;
let p=100;
//console.log(sumNumber(n,p));

let b=sumNumber(n,p);
//console.log(b);

let result=b.reduce((acc,curr)=>acc+curr,0);
console.log(result);

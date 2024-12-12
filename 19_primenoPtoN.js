//19. Create a function that will return in an array the first “p” prime numbers greater than “n”
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
let n=100;
let p=10
console.log(sumNumber(n,p));
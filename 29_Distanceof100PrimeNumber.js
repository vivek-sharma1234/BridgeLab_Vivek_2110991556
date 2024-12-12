//29. Print the distance between the first 100 prime numbers
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

function sumNumber(n){
    let primes=[];
    let c=2;
    while(primes.length<n){
        if(PrimeNumber(c)){
            primes.push(c);
        }
        c++;
    }
    return primes;
}
//let n=0;
//let p=100;
//console.log(sumNumber(n,p));

//finding distance:
function distancePrime(primes){
    let distance=[];
    for(i=1;i<primes.length;i++){
        distance.push(primes[i]-primes[i-1]);
    }
    return distance;
}
let primes=sumNumber(100);
let distance=distancePrime(primes);
console.log(primes);
console.log(distance);




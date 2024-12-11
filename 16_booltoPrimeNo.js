//16. Create a function that will return a Boolean specifying if a number is prime
function PrimeNumber(n){
    if(n<2){
        return false;
    }
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }return true; 
}console.log(PrimeNumber(19));
console.log(PrimeNumber(16));


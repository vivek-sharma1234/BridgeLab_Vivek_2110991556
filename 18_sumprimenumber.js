//18. Print the first 100 prime numbers
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

function sumNumber(l){
    let x=[];
    let num=2;
    while(x.length<l){
        if(PrimeNumber(num)){
            x.push(num);
        }
        num++;
    }
    return x;
}console.log(sumNumber(100));

//17. Calculate the sum of digits of a positive integer number
var n=66;
var sum=0;
var r;
while(n>0){
    r=n%10;
    sum+=r;
    n=Math.floor(n/10);
}console.log(sum);



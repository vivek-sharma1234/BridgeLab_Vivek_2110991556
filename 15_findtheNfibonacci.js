//15. Create a function that will find the nth Fibonacci number using recursion

function fiboN(n){
    if(n<=1){
        return n;
    }
    return fiboN(n-1)+fiboN(n-2);

}function fiboprint(n){
    for(i=0;i<n;i++){
        console.log(fiboN(i));
        
    }
    
}fiboprint(10);
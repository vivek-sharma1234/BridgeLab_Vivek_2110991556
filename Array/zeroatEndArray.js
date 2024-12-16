//Zeros in array at the end of the array:
function pushZeroAtEnd(){
    let count=0;
    for(i=0;i<n;i++){
        if(arr[i]!=0)
        arr[count++]=arr[i];
    }
    while(count<n){
        arr[count++]=0;
    }
}
let arr=[1,2,3,4,0,0,8,7,65,4,0];
let n=arr.length;
pushZeroAtEnd(arr,n);
console.log("After Zero pushing to the end of the Array:");
console.log(arr.join(" "));


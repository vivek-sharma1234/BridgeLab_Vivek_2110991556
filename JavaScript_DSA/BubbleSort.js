//Bubble Sorting in an array

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<(arr.length-i-1);j++){
            
            
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
    
    
}
var arr=[3,6,5,7,4,9];
console.log(bubbleSort(arr));

//26. Create a function that will receive two arrays and will return an array with elements 

function filterArr(arr1,arr2){
    let a=[];
    a=arr1.filter((item)=>!arr2.includes(item));
    return a;

}let arr1=[1,2,3,4];
let arr2=[3,4,5,6];
console.log(filterArr(arr1,arr2));

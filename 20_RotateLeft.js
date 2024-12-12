//21. Rotate an array to the right 1 position
function rotate(arr){
    let x=arr.pop();
    arr.unshift(x);
    return arr;
    
}let arr=[46,47,48,45];
console.log(rotate(arr));
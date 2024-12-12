//20. Rotate an array to the left 1 position

function rotate(arr){
    let x=arr.shift();
    arr.push(x);
    return arr;
    
}let arr=[45,46,47,48];
console.log(rotate(arr));



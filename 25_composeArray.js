//25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function compose(arr1,arr2){
    return[
        ...arr1.filter((item)=>!arr2.includes(item)),
        ...arr2.filter((item)=>!arr1.includes(item)),
    ];
}
let arr1=[1,2,3,4,5,6,7];
let arr2=[5,6,7,8,9];
console.log(compose(arr1,arr2));

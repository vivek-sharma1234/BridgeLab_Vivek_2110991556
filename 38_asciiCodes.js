
//38. Create a function that will convert an array containing ASCII codes in a string
let arr=[67,104,105,116,107,97,114,97];
function asciiToString(arr)
{
    let finalArr=[];
    arr.forEach(i => {
        finalArr.push(String.fromCharCode(i));
    });
    return finalArr
}

console.log(asciiToString(arr))
//32. Create a function that will capitalize the first letter of each word in a text
function capitalize(arr){
    let result= arr.map(word=>word.charAt(0).toUpperCase()+word.slice(1));
    
    return result;
    
}
let arr= ["vivek","sharma","underOfficer"];
console.log(capitalize(arr));

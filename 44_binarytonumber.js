//44. Create a function that will convert a string containing a binary number into a number

function BinaryToDecimal(x){
    if(!/^[01]+$/.test(x)){
        throw new Error("Invalid x");
    }
    return parseInt(x,2);
}
let x="1111";
console.log(BinaryToDecimal(x));

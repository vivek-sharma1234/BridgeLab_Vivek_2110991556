//37. Create a function that will convert a string in an array containing the ASCII codes of each character

function NumberToString(word){
    
    return word.split('').map((char)=>char.charCodeAt(0));

}
let word= "Welcome";
let ascii=NumberToString(word);
console.log(ascii);
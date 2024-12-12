//31. Create a function that will return the number of words in a text

function NumberToString(word){

    var a=word.split(" ");
    console.log(a);
    
    return a.length;
}
let word= "I Am a Student Of Bridge lab";
console.log(NumberToString(word));

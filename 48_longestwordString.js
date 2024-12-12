//48. Create a function to return the longest word in a string


function longestWord(str){
    let w=str.split(' ');
    let l=w.reduce((l,c)=>{
        return c.length>l.length?c:l;
    },"");
    return l;
}
let str="Working Hard is a good habit to do";
let l=longestWord(str);
console.log(l);

//Global Scope:
var Name= "Under Officer";

function outer(){
    console.log(Name);
    
}
console.log(Name);

//local scope:
console.log("Local Scope");

function outer(){
    const arr=[1,2,3,4];
    console.log(arr);
}
outer();
//console.log(arr); when we pass this value in the function  is show an error because the arr is the local scope of the code and it is undefined.

//Block Scope:
console.log("BLock Scope");

{
    let arr= ["Vivek",2];
    console.log(arr);
    
}
//console.log(arr);it show an error becaue it isnot a global scope.

console.log("Lexical and Scope Chain");

var var1="Vivek";
function outer(){
    const var2="UnderOfficer";
    function inner(){
        let var3="Sharma";
        console.log(var1);
        console.log(var2);
        console.log(var3);
    }inner();
}outer();


console.log("Shadowing the Scope");

let x=10;
function outer(){
    let x=100;
    console.log(x);
    
}outer();
console.log(x);


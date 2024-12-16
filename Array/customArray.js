//Using the Array Constructor
const customArray=new Array();
customArray.sum=function(){
    
};
customArray.push(10,20,30);
console.log(customArray);
console.log(customArray.sum());


//Using Class Syntax to Extend Array
class custom extends Array{
    constructor(...elements){
        super(...elements);
    }
    sum(){
        return this.reduce((acc,val)=>acc+val,0);
    }
}
const a=new custom(10,20,30,40);
console.log(a);
console.log(a.sum());


3.//Using apply and map methods

//function apply(this,argsArray):syntax
let arr = Array.apply(null,Array(5)).map(function(){

});
console.log("length of Array:",arr.length);
console.log("Array Values:",arr);


//arr.map((element,index,array)=>{}):syntax
let arr1=Array.apply(null,Array(5)).map(function(y,i){
    return i;

});
console.log(arr1.length);
console.log(arr1);

//4.Using Array from() Methods
let arr2=Array.from("12345");
console.log(arr2.length);
console.log(arr2);

//5.string.repeat 
let arr3=Array.from("5".repeat(5));
console.log(arr3.length);
console.log(arr3);

//6.Using for loop with Array.push() Methods

const size =5;
const arr4=[];
for(i=0;i<size;i++){
    arr.push(i);
}
console.log(arr4.length);
console.log(arr4);

//using Math.max() and apply()
const b=[22,1,34,85];
console.log(Math.max.apply(null,b));

//Finding MAx using Reduce
const arr5=[1,2,3,4,5];
const ans=arr.reduce(function(a,b){
    return (a>b)?a:b
});
console.log(ans);

//using Sort Mthods
let arr6= [22,4,5,6,7];
arr.sort((a,b)=>b-a);
console.log(arr6[0]);

//Sorting Methods
//Using The Brute force Approach
function sort(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }return true;

}let arr7=[3,4,5,6];
let arr8=[22,6,512,5];
console.log(sort(arr7));
console.log(sort(arr8));



//Shift of the Array to left of the Array:Array Rotation left

function rotation(arr){
    if(arr.length<=1){
        return arr;
    }
    return arr.map((_,index,array)=>
        arr[(index+1)%arr.length])
    
}
let arr1=[1,2,3,4,5];
let result= rotation(arr1);
console.log(arr1);
console.log(result);

//Call, Bind And Apply methods in Array

//if we find the max Values//apply methods
let number =[12,4,67,4,5];
let max= Math.min.apply(null,number);
console.log(max);//Argument are passed as individually


//using the call methods
let max1= Math.max.call(null,...number);
console.log(max1);

//Apply,call &Bind in JS
let userDetails={
    name:"Vivek Sharma",
    Age:21,
    Designation:"Software Developer",
    //print:function(){
        //console.log(this.name);
        
}    
let print=function(state,country){
    console.log(this.name+ " "+ state+country);
        
}
print.call(userDetails,"Mumbai" +"India");


let userDetails2={
    name:"Rohit",
    Age:26,
    Designation:"Software Developer",
    
        
}
//function borrowing
print.call(userDetails2,"Delhi"+" "+"Himachal");
print.apply(userDetails2,["Delhi","India"])

//bind
let newfun=print.bind(userDetails,"Mumbai" +"India");
newfun();

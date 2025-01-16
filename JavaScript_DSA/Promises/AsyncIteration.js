//iteration mean to iterate(refine) the function (code)

function asyncGenerator(){
    yield "First";
    yield "Second";
    yield "Third";
}
(async()=>{
    for await(const value of asyncGenerator()){
        console.log(value);
        
    }
})();


//////////////generator//////////////////

//Generator is use to stop multiple value code or function at a time.

function generateFunction(){
    yield 1
    yield 2
    yield 3
}
const gen = generateFunction
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);  


///////////////////////currying/////////////////////////
//Currying is a technique where a function is transformed into a sequence of functions, each taking a single argument.

function multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        };
    };
};
console.log(multiply(2)(3)(4));

///////////////hoisting//////////////////
//Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope.
///example///
console.log(a);
var a=10;
console.log(b);
let b=20;


////usinf in function
sayhello();
function sayhello(){
    console.log("Hello WORLD");
    
}


//////////////callback////////////////
//it is the function as argument to other function, often used for asynchronous operation


function fetchData(callback){
    setTimeout(()=>callback("Data fetched"),1000);
}

fetchData((data)=>{
    console.log(data);
    
})
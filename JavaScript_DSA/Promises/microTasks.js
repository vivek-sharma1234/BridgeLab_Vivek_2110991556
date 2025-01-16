// these are the type of asynchronous operationthat executes before other asynchrous task using settimeout finction

console.log("Start");
promise1.resolve().then(()=>console.log("MicroTaks"));

setTimeout(() => {
    console.log("MacroTaks");
    
},0);
console.log("End");


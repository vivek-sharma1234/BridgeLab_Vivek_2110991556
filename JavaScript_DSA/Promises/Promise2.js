//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises help handle asynchronous code more elegantly than callbacks.

//1. Creating a promise
const myPromise =new Promise((resolve,reject)=>{
    let success= true;

    if(success){
        resolve("Promise resolved successfully");
    }
    else{
        resolve("Promise rejected")
    }
});
myPromise.then(result=>console.log(result))
.catch(error=>console.log(error))


//promiseChaining

const a= new Promise((resolve)=>{
    resolve(2);
})
a.then(result=>{
    console.log(result);
    return result *2;
})
.then(result=>{
    console.log(result);
    return result*3;
})
.then(result=>{
    console.log(result);
})
.catch(error=>console.log(error))
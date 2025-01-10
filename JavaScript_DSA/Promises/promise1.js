//promises: it is an object representing the eventual completion or failure of the asynchrnous opertions.
// fetch ('https://something.com').then().catch().finally(); 

//who to make promises
const promise1= new Promise(function (resolve,reject){
    //Do an Async Tack
    //DB calls, cryptoGraphy, network
    setTimeout(function(){
        console.log("Async tack is complete");
        resolve();//connected to then function
        },1000)
});

promise1.then(function(){//return of the value of function
    console.log("Promise consumed");
    
});


//2.promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve();
    },1000);
}).then(function(){
    console.log("Async 2 resolve");
    
})


//3.

const Promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Vivek",email: "vivek@gmail.com"});
    },1000);

});
Promise2.then(function(user){
    console.log(user);
    
})




//4.
const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true;
        let error = false;    
        if (!error){
            resolve({username:"Rohit",password:"123"})
        }
        else{
            reject('ERROR:Something went wrong');
        }
    },2000);
});
promise3
.then((user)=>{
    console.log(user);
    return user.username;
    
})
.then((username)=>{//We Can Do Chaining of then 
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
}).finally(()=>{console.log("finally Completed");
})




//5.

const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
           
        if (!error){
            resolve({username:"Mohit",password:"123"})
        }
        else{
            reject('JS Went Wrong');
        }
    },1000);
});


async function comsumePromise4(){
    try{
        const response= await promise4;
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
} 
comsumePromise4();




/////////////////////////


// async function getAllUser(){
//     try{
//     const response = await fetch('https://www.google.com')
//     //console.log(response);
    
//     const data= await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log("E"+error);  
//     }
// }
//getAllUser();



fetch('https://www.google.com')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

//it is a process of convertiong the function that uses callback into that return the promise

function getdata(callback){
    setTimeout(()=>callback(null,"Data received"),1000)
}

getdata((err,data)=>{
    if(err)console.error(err);
    else console.log(data);
    
})

////////////////

function Promise(func){
    return function(...args){
        return new promise1((resolve,reject)=>{
            func(...args,(err,result)=>{
                if(err)reject(err);
                else resolve(result);
            });
        });
    }
}
const getDataAsync=promise(getdata);

getDataAsync().then(console.log).catch(console.error);



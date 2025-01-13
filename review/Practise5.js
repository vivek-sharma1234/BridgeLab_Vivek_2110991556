//ChainOperations 

function ChainOperation(){
    return new Promise((resolve,reject)=>{
        console.log("Start");
        setTimeout(()=>{
            const data = {value:20};
            if(!data){
                reject(new Error("Failed"));
            }else{
                resolve(data);
            }
        },1000);
    })
    .then((data)=>{
        console.log("Process...");
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(data.value<=0){
                    reject(new Error("Invalid"));
                }else{
                    data.processValue=data.value*2;
                    resolve(data);
                }
            },1000);
        });
    })
    .then((data)=>{
        console.log("Finally...");
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(!data.processValue){
                    reject(new Error("Failed"));
                }else{
                    data.Finalized= true;
                    resolve(data);
                }
            },1000);
            
        });
        
    })
    .then((data)=>{
        console.log("Successfully");
        return data;
    })
    .catch((error)=>{
        console.log("Error");
        throw error;
    });
}

ChainOperation()
.then((result)=>{
    console.log("result");
    
})
.catch((error)=>{
    console.error(error.message);
})
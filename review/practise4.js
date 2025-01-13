function perform(){
    return new Promise((resolve,reject)=>{
        console.log("First Operation...");
        setTimeout(()=>{
            const data={value:40};
            resolve(data);
        },1000);
    })
    .then((data)=>{
        console.log("Process the data...");
        return new Promise((resolve)=>{
            setTimeout(() =>{
                if(data.value!=40){
                    throw new Error("UnExpected");
                }
                data.processValue=data.value *2;
                resolve(data);
            },1000);
        });
    })
    .then ((data)=>{
        console.log("All Operation done");
        return data;
    })
    .catch((error)=>{
        console.error("Error");
        throw error;
    });
}

perform()
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error.message);
});
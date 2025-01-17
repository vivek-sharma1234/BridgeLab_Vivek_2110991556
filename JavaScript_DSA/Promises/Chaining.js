function Data(step){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(`Step ${step}`),1000);
    });
}
Data(1)
.then((data)=>{
    console.log(data);
    return Data(2);    
})
.then((data)=>{
    console.log(data);
    return Data(3);
})
.then((data)=>{
    console.log(data);
    return Data(4);
})
.then((data)=>console.log(data));
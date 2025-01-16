//it help to used to write a code in asynchronous way to look it synchrous

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("fetched Data"),1000);
    });
}
async function main(){
    const data = await fetchData();
    console.log(data);
    
}
main();
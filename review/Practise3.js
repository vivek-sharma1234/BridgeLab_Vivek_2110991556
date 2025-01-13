function debounce(func,delay){
    let timeoutId;
    
    return function(...args){
        const context= this;

        clearTimeout(timeoutId);
        timeoutId=setTimeout(()=>{
            func.apply(context,args);
        },delay);
    };
}
const  a = (query)=>{
    console.log(`value : ${query}`);
};

const debounceSearch= debounce(a,200);
debounceSearch("HelloWOrld");
debounceSearch("deBounce");
debounceSearch("JavaScript");
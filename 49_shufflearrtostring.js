//49. Shuffle an array of strings

function shuffle(arr){
    for(i=arr.length;i>0;i--){
        const r=Math.floor(Math.random()*(i+1));

        [arr[i],arr[r]]=[arr[r],arr[i]];
    }
    return arr;
}
let arr=["Vivek","Sharma","Under","Officer"];
console.log(shuffle(arr));

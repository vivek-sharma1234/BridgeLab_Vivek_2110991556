//27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
let arr=[1,1,2,3,4,5,6,5,2,1];
function abcd(arr)
{
    let finalArr=[]
    for(let i=0;i<arr.length;i++)
    {
        let j;
        for(j=0;j<i;j++)
        {
            if(arr[i]===arr[j])
            {
                break;
            }
        }
        if(i==j)
        {
            finalArr.push(arr[i])
        }
    }
    //let finalArr=arr.filter((item)=>arr[item]!==arr[item+1])
    return finalArr;
}
console.log(abcd(arr))
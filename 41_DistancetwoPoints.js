//41. Create a function to calculate the distance between two points defined by their x, y coordinates

function CalculateDistance(x1,y1,x2,y2){
    let a=x2-x1;
    let b=y2-y1;
    return result=Math.sqrt(a*a+b*b);
}
let x1=4;
let x2=5;
let y1=3;
let y2=7;
console.log(CalculateDistance(x1,x2,y1,y2));

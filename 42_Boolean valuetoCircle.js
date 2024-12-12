//42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

function Circleintersection(x1,y1,r1,x2,y2,r2){
    let a=x2-x1;
    let b=y2-y1;
    let d=Math.sqrt(a*a+b*b);
    console.log(d);
    
    return d<=(r1+r2);
}
let c1={x:0,y:0,r:5};
let c2={x:6,y:0,r:3};
console.log(Circleintersection(c1.x,c1.y,c1.r,c2.x,c2.y,c2.r));

//Using the Array Constructor:
let index= new Array();

index.sum=function(){
    return this.reduce((acc,val)=>acc+val,0);
};
index.push(10,20,30);
console.log(index);
console.log(index.sum());

//Using Class Syntax toExtend Array
class CustomArray extends Array {
    constructor(...elements) {
        super(...elements);
    }

    // Custom method
    sum() {
        return this.reduce((acc, val) => acc + val, 0);
    }
}

// instance of CustomArray
const myArray = new CustomArray(10, 20, 30);

console.log(myArray);
console.log(myArray.sum()); 
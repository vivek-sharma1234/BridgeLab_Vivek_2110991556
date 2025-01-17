//Extending the Array Class
// class CustomArray extends Array{
//     first(){
//         return this[0];
//     }
//     last(){
//         return this[this.length-1];
//     }
// }
// const arr = new CustomArray(1,2,3,4);
// console.log(arr.first());
// console.log(arr.last());//4


//Extending the Error Class

class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }

    getErrorMessage() {
        return `${this.message} (Code: ${this.code})`;
    }
}

const error = new CustomError("Something went wrong", 404);
console.log(error.getErrorMessage()); // "Something went wrong (Code: 404)"
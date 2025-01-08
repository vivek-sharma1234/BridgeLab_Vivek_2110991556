//Optional Chaining
//It is used to safety access deeply nested object properties without having to check if each reference in the chain is null or undefined.

const user= {
    name:"Vivek",
    address:{
        city:Una,
        State:HTMLParagraphElement,
    }
};

console.log(user.address && user.address.city);
console.log(user.address?.city);
console.log(user.address?.country);

console.log(user.getName?.());



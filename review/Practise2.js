const customObject = {
    name: "Vivek",
    age:28,
    valueOf(){
        return this.age;
    },
    toString(){
        return  `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(String(customObject ));
console.log(Number(customObject));
console.log(customObject +12);
console.log(`${customObject}`);





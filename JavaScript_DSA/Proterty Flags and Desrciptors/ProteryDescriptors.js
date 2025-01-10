//1.Defining property
let a ={};
Object.defineProperty(obj, "name",{
    value: "Vivek",
    writable: false,
    configurable: false,
    enumerable: true
});
console.log(obj.name);
obj.name="Rohit";// No effect because writable is false
console.log(obj.name);

//Defining an Accessor Property
let user = {
    firstName: "John",
    lastName: "Doe"
};

Object.defineProperty(user, "fullName", {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },

    enumerable: true,
    configurable: true
});

console.log(user.fullName); // "John Doe"
user.fullName = "Jane Smith";
console.log(user.firstName); // "Jane"
console.log(user.lastName);  // "Smith"


//If we have to defining Multiple Properties
let obj = {};
Object.defineProperties(obj, {
    name: {
        value: "Vivek",
        writable: true,
        enumerable: true
    },
    age: {
        value: 25,
        writable: false,
        enumerable: false
    }
});

console.log(obj.name); // "Vivek"
console.log(Object.keys(obj)); // ["name"]
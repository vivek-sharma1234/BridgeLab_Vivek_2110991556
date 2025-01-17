function Animal(type){
    this.type =  type;
}
Animal.prototype.speak=function(){
    console.log(`${this.type} makes a sound`);
};

function Dog(name){
    Animal.call(this,"Dog");
    this.name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

Dog.prototype.bark= function(){
    console.log((`${this.name} bark`));
};
const myDog = new Dog("Rex");

myDog.spark();
myDog.bark();
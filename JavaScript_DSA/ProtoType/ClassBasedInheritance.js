class Animal {
    constructor(type) {
        this.type = type;
    }

    speak() {
        console.log(`${this.type} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Dog"); // Call parent class constructor
        this.name = name;
    }

    bark() {
        console.log(`${this.name} barks`);
    }

    run(){
        console.log(`${this.name} runs`);
        
    }
}

const myDog = new Dog("Rex");
myDog.speak(); // "Dog makes a sound"
myDog.bark(); // "Rex barks"
myDog.run();

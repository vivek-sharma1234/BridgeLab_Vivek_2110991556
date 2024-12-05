//1. iterable in array
const numbers =[10,20,30];
for(const num of numbers){
    console.log(num);
    
}
const doublenumber=numbers.map(num=>num*2);
console.log(doublenumber);

//2.Iterating  over a string

const greeting= "Hello";
for(const char of greeting){
    console.log(char);
    
}
console.log(greeting);


//3.Iterating Map

const myMap = new Map([
    ["name","Vivek"],
    ["age",21],
])
for(const [key,value] of myMap){
    console.log(`${key}: ${value}`);
    
}

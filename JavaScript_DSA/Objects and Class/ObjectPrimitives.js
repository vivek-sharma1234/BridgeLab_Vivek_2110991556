//There are two abstract operation to convert the object to primitives
//1.to Primitive(hint

const obj= {
    value:43,
    [Symbol.toPrimitive](hint){//hint is calling 
        console.log(hint);
        return hint== "string"?"object as String":43;
        
    }
};
console.log(obj + 10);
console.log(String(obj));

//2.Default methods
const obj1= {
    toString(){
        return "I am String";
    },
    valueOf(){
        return 123;
    }
};
console.log(obj1 + 1);
console.log(String(obj1));

//Custom Symbol.toPrimitives
const obj2= {
    [Symbol.toPrimitive](hint){
        if(hint ==="string") return "custom string";
        if(hint === "number") return 100;
        return null;
    }
};
console.log(String(obj2));
console.log(obj2 +10);

//Object as a Key in Maps: Objects used as keys in a Map are not converted to primitives.

const map = new Map();
const key = {id:1};
map.set(key,"value");
console.log(map.get(key));


//Implicit Conversion in Comparisons:
const obj3= {
    valueOf(){
        return 10;
    }
};
console.log(obj3==10);


//Errors with No Primitive Result:
const obj4={
    toString(){
        return this;
    }
};
console.log(obj4 + 10);

//Implementing array in Array
class Stack{
    constructor(){
        this.items=[];
    }
    push(element){

        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    printStack(){
        console.log(this.items.join("=>"));
        
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
stack.printStack();

stack.pop();
stack.printStack();
console.log(stack.isEmpty());
console.log(stack.size());


//Stack using Object
class Stack{
    constructor(){
        this.stack={};
        this.top=-1;
        
    }
    push(element){
        this.top++;
        this.stack[this.top]=element;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        const topElement=this.stack[this.top];
        delete this.stack[this.top];
        this.top--;
        return topElement;
    }
    peek(){
        return this.isEmpty()?"Stack is Empty" :this.stack[this.top];

    }
    isEmpty(){
        return this.top===-1;
    }
    size(){
        return this.top + 1;
    }
    print(){
        let result=[];
        for(let i=0;i<=this.top;i++){
            result.push(this.stack[i]);
        }
        console.log(result.join(" -> "));
        
    }
}
let stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack.peek());
stack.print();
console.log(stack.pop());
stack.print();


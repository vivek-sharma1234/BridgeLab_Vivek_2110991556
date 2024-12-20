//Stack using Linked list 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top=null;
        this.size=[];
    }
    push(data){
        let newNode=new Node(data);
        newNode.next=this.top;
        this.top =newNode;
        this.size++;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        let removedData=this.top.data;
        this.top = this.top.next;
        this.size--;
        return removedData;
    }
    peek(){
        if(this.isEmpty()){
            return "Stack id Empty";
        }
        return this.top.data;
    }
    isEmpty(){
        return this.top===null;
    }
    getSize(){
        return this.size;
    }
    //print the Stack
    printStack(){
        let current =this.top;
        let result=[];
        while(current){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join("->"));
        
    }
}
let stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top Element:", stack.push());
stack.printStack();

stack.pop();
stack.printStack();

console.log(stack.isEmpty());
console.log(stack.getSize());



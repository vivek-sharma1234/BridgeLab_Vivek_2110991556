//Queue using Linked List
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.front =null;
        this.rear=null;
        this.count=0;
    }
    enqueue(data){
        let newNode=new Node(data);
        if(this.rear){
            this.rear.next=newNode;
        }
        this.rear = newNode;
        if(!this.front){
            this.front=newNode;
        }
        this.count++;
    }
    dequeue(data){
        if(this.isEmpty){
            return "queue is empty";
        }
        let removeData=this.front.data;
        this.front= this.front.next;
        if(!this.front){
            this.rear=null;

        }
    }
    frontElement(){
        return this.isEmpty()? "Queue is Empty":this.front.data;
        
    }
    isEmpty(){
        return this.front===null;
    }
    size(){
        return this.count;
    }
    print(){
        let current = this.front;
        let result=[];
        while(current){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join("->"));
        
    }
}
let queue = new Queue();
queue.enqueue(10);
queue.dequeue(20);
queue.dequeue(30); 
console.log(queue.frontElement());
queue.print();
console.log(queue.dequeue());
queue.print();


//Queue Using array
class Queue{
    constructor(){
        this.queue=[];
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is Empty";
        }
        return this.queue.shift();
    }
    front(){
        return this.isEmpty()?"Queue is Empty": this.queue[0];
    }
    isEmpty(){
        return this.queue.length;
    }
    print(){
        console.log(this.queue.join(" -> "));
        
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
queue.print();
console.log(queue.dequeue());
queue.print();



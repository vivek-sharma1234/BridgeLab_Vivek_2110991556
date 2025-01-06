class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return "Queue is empty";
        }

        return this.stack2.pop();
    }

    front() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return "Queue is empty";
        }

        return this.stack2[this.stack2.length - 1];
    }

    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

const queue = new QueueUsingStacks();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Dequeue:", queue.dequeue()); 
console.log("Front:", queue.front());     
console.log("Dequeue:", queue.dequeue()); 
queue.enqueue(40);
console.log("Dequeue:", queue.dequeue()); 
console.log("Empty:", queue.empty());     
console.log("Dequeue:", queue.dequeue()); 
console.log("Empty:", queue.empty());     

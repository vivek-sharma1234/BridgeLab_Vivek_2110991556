class CircularQueue {
    constructor(size) {
        this.size = size; 
        this.queue = new Array(size).fill(null); 
        this.front = -1; 
        this.rear = -1; 
    }

   
    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full. Cannot enqueue.");
            return;
        }

        if (this.isEmpty()) {
            
            this.front = 0;
        }

     
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        console.log(`Enqueued: ${value}`);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null;
        }

        const dequeuedValue = this.queue[this.front];
        this.queue[this.front] = null; // Clear the value

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        console.log(`Dequeued: ${dequeuedValue}`);
        return dequeuedValue;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.queue[this.front];
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }

        console.log("Queue:", this.queue);
    }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.printQueue(); 

cq.dequeue(); 
cq.dequeue(); 
cq.printQueue(); 

cq.enqueue(60); 
cq.enqueue(70); 
cq.printQueue(); 

console.log("Peek:", cq.peek()); 

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items[0];
    }

    printQueue() {
        console.log(this.items.join(" -> "));
    }
}

function reverseQueue(queue) {
    const stack = [];

    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("Original Queue:");
queue.printQueue(); // Output: 1 -> 2 -> 3 -> 4 -> 5

reverseQueue(queue);

console.log("Reversed Queue:");
queue.printQueue(); // Output: 5 -> 4 -> 3 -> 2 -> 1

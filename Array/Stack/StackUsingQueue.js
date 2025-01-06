class StackUsingQueues {
    constructor() {
        this.queue1 = []; 
        this.queue2 = []; 
    }

    push(x) {
        this.queue2.push(x);

        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }

        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        if (this.queue1.length === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.queue1.shift();
    }

    top() {
        if (this.queue1.length === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.queue1[0];
    }

    empty() {
        return this.queue1.length === 0;
    }
}

// Example Usage
let stack = new StackUsingQueues();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.top()); 
console.log("Popped element:", stack.pop()); 
console.log("Popped element:", stack.pop()); 
console.log("Stack is empty:", stack.empty()); 
stack.pop();
console.log("Stack is empty:", stack.empty()); 
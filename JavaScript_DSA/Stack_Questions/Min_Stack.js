class MinStack {
    constructor() {
        this.stack = []; 
        this.minStack = []; 
    }

    push(x) {
        this.stack.push(x);

        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            console.log("Stack is empty. Cannot pop.");
            return null;
        }

        const poppedValue = this.stack.pop();

        if (poppedValue === this.getMin()) {
            this.minStack.pop();
        }

        return poppedValue;
    }

    top() {
        if (this.stack.length === 0) {
            console.log("Stack is empty.");
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            console.log("Stack is empty.");
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);

console.log("Minimum:", minStack.getMin()); 
console.log("Top:", minStack.top()); 

minStack.pop(); 
console.log("Minimum after pop:", minStack.getMin()); 

minStack.pop(); 
console.log("Minimum after pop:", minStack.getMin()); 

minStack.pop(); 
console.log("Minimum after pop:", minStack.getMin()); 

function sortStack(stack) {
    let tempStack = [];

    while (stack.length > 0) {
        let current = stack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) {
            stack.push(tempStack.pop());
        }

        tempStack.push(current);
    }

    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return stack;
}

let stack = [34, 3, 31, 98, 92, 23];
console.log("Original Stack:", stack);

let sortedStack = sortStack(stack);
console.log("Sorted Stack:", sortedStack);

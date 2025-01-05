function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;

        current.next = prev;

        prev = current;
        current = next;
    }

    return prev;
}
function createLinkedList(arr) {
    let head = null;
    let current = null;
    
    for (let value of arr) {
        const newNode = { value, next: null };
        
        if (head === null) {
            head = newNode;
            current = head;
        } else {
            current.next = newNode;
            current = current.next;
        }
    }

    return head;
}

function printLinkedList(head) {
    let current = head;
    let result = [];
    
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    
    console.log(result.join(" -> "));
}

// Example Usage
const arr = [1, 2, 3, 4, 5];
let head = createLinkedList(arr);
console.log("Original Linked List:");
printLinkedList(head);

head = reverseLinkedList(head);
console.log("Reversed Linked List:");
printLinkedList(head);
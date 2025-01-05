function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;       
        fast = fast.next.next;   

        if (slow === fast) {
            return true;  
        }
    }

    return false;
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

const arr = [1, 2, 3, 4, 5];
let head = createLinkedList(arr);

head.next.next.next.next.next = head.next; 

console.log("Cycle Detected:", hasCycle(head)); 

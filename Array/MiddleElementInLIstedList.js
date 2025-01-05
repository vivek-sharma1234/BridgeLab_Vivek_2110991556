function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;   
    }

    return slow ? slow.value : null; 
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

let list = createLinkedList([1, 2, 3, 4, 5, 6]);

console.log("Middle Element:", findMiddle(list)); 

let list2 = createLinkedList([1, 2, 3, 4, 5, 6, 7]);

console.log("Middle Element:", findMiddle(list2)); 

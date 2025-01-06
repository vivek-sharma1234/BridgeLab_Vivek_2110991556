function removeNthFromEnd(head, n) {
    let dummy = { value: null, next: head };
    let slow = dummy;
    let fast = head;

    for (let i = 0; i < n; i++) {
        if (fast === null) return null; // n is greater than the length of the list
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
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

let list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original List:");
printLinkedList(list);

let updatedList = removeNthFromEnd(list, 2);
console.log("Updated List:");
printLinkedList(updatedList);

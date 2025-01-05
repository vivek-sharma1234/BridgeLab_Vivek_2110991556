function mergeTwoLists(l1, l2) {
    let dummy = { value: null, next: null };
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }

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

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);

console.log("List 1:");
printLinkedList(list1);
console.log("List 2:");
printLinkedList(list2);

let mergedList = mergeTwoLists(list1, list2);

console.log("Merged List:");
printLinkedList(mergedList);

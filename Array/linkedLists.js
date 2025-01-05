///Linked Lists is a linear data structure of the nodes where each nodes cantains two parts:
//1. Data: the value of the node
//2.Next:A reference to the next node in the sequences

//types:
//1.Singly linked List.
//2. Doubly Linked Lsit .
//3. Circular Linked list

// Singly Linked lists operation
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor() {
        this.head=null;
        
    }
    append(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode; // if the list is empty, set the new node as the head
            return;
        }
        let current= this.head;
        while(current.next){
            current = current.next;// Traverse to the last node
        }
        current.next= newNode;//link the last node to the new node
    }
    prepend(data){
        const newNode= new Node(data);
        newNode.next= this.head; //Point the new node to the curent node
        this.head = newNode; // Update the had to the new node
    }
    delete(data){
        if(!this.head)return;// if the list is empty,do nothing

        // if the node to delete is the head
        if (this.head.data=== data){
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next && current.next.data !==data){
            current = current.next;
        }
        if(current.next){
            current.next=current.next.next;
        }
    }
    print(){
        let current= this.head;
        let result= [];
        while(current){
            result.push(current.data);
            current = current.data;
        }
        console.log(result.join("->"));
        
    }
}
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
list.prepend(5);
list.print();
list.delete(20);
list.print();
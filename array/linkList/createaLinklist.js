function Node(value) {
    this.value = value;
    this.next = null;
}

function MyLinkedList() {
    this.head = 'null';
    this.size = 0;
}
const myList = new MyLinkedList();


let node1 = new Node(10);
let node2 = new Node(20);
node1.next = node2;
let node3 = new Node(30);
node2.next = node3;

myList.head = node1;

myList.size = 3;
let current = myList.head;

while (current) {
    console.log(current.value);
    current = current.next;
}


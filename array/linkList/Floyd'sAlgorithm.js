function Node(value) {
    this.value = value;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}
const myList = new MyLinkedList();



let node1 = new Node(10);
let node2 = new Node(20);
node1.next = node2;
let node3 = new Node(30);
node2.next = node3;
let node4 = new Node(40);
node3.next = node4;
let node5 = new Node(50);
node4.next = node5;
let node6 = new Node(60);
node5.next = node6;
let node7 = new Node(70);
node6.next = node7;
let node8 = new Node(80);
node7.next = node8;
let node9 = new Node(90);
node8.next = node6;

// let node10 = new Node(100);
// node9.next = node10;



node2.next = node3;



myList.head = node1;

myList.size = 3;



MyLinkedList.prototype.addTotail = function (value) {
    if (this.head === null) {
        let newNode = new Node(value);
        this.head = newNode;

    }
    else {
        let newNode = new Node(value);
        let current = myList.head;

        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;

    }
    this.size++;
}

MyLinkedList.prototype.addAtPosition = function (key, value) {
    let newNode = new Node(value);
    let current = myList.head;
    let cnt = 1;

    while (current.next != null) {


        if (cnt === (key - 1)) {
            break;
        }
        cnt++;
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;

}

// myList.addTotail(40);
// myList.addAtPosition(3, 100)
// let current = myList.head;


// while (current) {
//     console.log(current.value);
//     current = current.next;

// }
// let hashMap = {};
// while (current) {
//     console.log(current.value);
//     if (hashMap[current.value]) {
//         console.log('circular linked list')
//         break;
//     }
//     else {
//         hashMap[current.value] = true;
//         // hashMap[current.value] = false;

//     } 
//     current = current.next;

// }
let current = myList.head;


let floyidAlgoFunction = function (current) {
    let slow = current;
    let fast = current.next;

    while (fast != slow) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;

}

console.log(floyidAlgoFunction(current));

class doublyLinkedList {
    constructor() {
        this.head = null
    }

    addFront(num) {
        this.head = new Node(num, this.head)
    }

    addLast(num) {
        if (this.head == null) {
            this.head = new Node(num)
        }
        else {
            let curr = this.head
            while (curr.next != null) {
                curr = curr.next
            }
            curr.next = new Node(num, null, curr)
        }
    }

    addInOrder(num) {
        if (this.head == null || num < this.head.data) {
            this.head = new Node(num, this.head)
            this.head.next.prev = this.head
        }
        else {
            let curr = this.head
            while (curr.next != null && num > curr.next.data) {
                curr = curr.next
            }
            curr.next = new Node(num, curr.next, curr)
        }
    } 

    
}

class Node {
    constructor(num, next=null, prev=null) {
        this.data = num
        this.next = next
        this.prev = prev
    }
}
const newLinkedList = new doublyLinkedList()
newLinkedList.addFront(10)
newLinkedList.addLast(15)
newLinkedList.addInOrder(1)
console.log(newLinkedList)
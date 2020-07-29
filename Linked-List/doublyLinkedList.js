class doublyLinkedList {
    constructor() {
        this.head = null
    }

    addFront(num) {
        this.head = new Node(num, this.head)
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
console.log(newLinkedList)
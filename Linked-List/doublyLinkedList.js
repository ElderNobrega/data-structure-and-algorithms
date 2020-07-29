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
console.log(newLinkedList)
class LinkedList {
    constructor() {
        this.head = null
    }

    addFront(num) {
        this.head = new Node(num, this.head)
        return this.head
    }

    addLast(num) {
        if (this.head == null) {
            this.head = new Node(num)
        } else {
            let curr = this.head
            while (curr.next != null) {
                curr = curr.next
            }
            curr.next = new Node(num)
        }
    }

    addInOrder(num) {
        if (this.head == null || this.head.data > num) {
            this.head = new Node(num, this.head)
        }
        else {
            let curr = this.head
            while (curr.next != null && num > curr.next.data) {
                curr = curr.next
            }
            curr.next = new Node(num, curr.next)
        }
    }
    delete(num) {
        if (this.head != null && num != this.head.data) {
            let curr = this.head
            while (curr.next != null && num != curr.next.data) {
                curr = curr.next
            }
            if (curr.next != null && num == curr.next.data) {
                curr.next = curr.next.next
            }
        }
        else {
            this.head = this.head.next
        }
    }

    printList() {
        if (this.head != null) {
            let curr = this.head
            while (curr != null) {
                console.log(curr.data)
                curr = curr.next
            }
        }
    }
}

class Node {
    constructor(num, next=null) {
        this.data = num
        this.next = next
    }
}

const newLinkedList = new LinkedList()
newLinkedList.addFront(10)
newLinkedList.addLast(15)
newLinkedList.addInOrder(19)
newLinkedList.delete(10)
newLinkedList.printList()
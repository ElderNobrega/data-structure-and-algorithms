class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        if (this.length == 0) {
            this.first = new Node(value)
            this.last = this.first
        }
        else {
            this.last.next = new Node(value)
            this.last = this.last.next
        }
        this.length++
    }

    dequeue() {
        if(!this.first) {
            return null
        }
        if (this.first == this.last) {
            this.last = null
        }
            this.first = this.first.next
            this.length--
    }
}

const myQueue = new Queue()

myQueue.enqueue('Maria')
myQueue.enqueue('Jhon')
myQueue.enqueue('Jen')
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.peek())
console.log(myQueue)
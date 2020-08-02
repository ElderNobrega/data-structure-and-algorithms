class Node {
    constructor(value, next=null) {
        this.data = value
        this.next = next
    } 
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek(){
        if (!this.bottom) {
            return console.log('Your stack is empty')
        }
        if (this.top) {
            return this.top
        }
    }

    push(value) {
        if (!this.bottom) {
            this.bottom = new Node(value)
            this.top = this.bottom
            this.length++
        }
        else {
            this.top.next = new Node(value)
            this.top = this.top.next
            this.length++
        }
    }

    pop() {
        if (!this.top) {
            return null
        }
        if (this.bottom === this.top) {
            this.bottom = null
            this.top = null
            this.length--
        }
        else {
            let curr = this.bottom
            let prev = null
            while (curr.next != null) {
                prev = curr
                curr = curr.next
            }
            prev.next = null
            this.top = prev
            this.length--
        }
    }
}

const myStack = new Stack()
myStack.push('Google')
myStack.push('Amazon')
myStack.push('Youtube')
console.log(myStack.peek())
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)
console.log(myStack.peek())
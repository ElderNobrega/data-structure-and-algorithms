class Stack {
    constructor() {
        this.data = []
        this.length = 0
    }

    peek() {
        if (this.length === 0) {
            return null
        }
        return this.data[this.length - 1]
    }

    push(value) {
        this.data.push(value)
        this.length++
    }

    pop() {
        if (this.length === 0) {
            return null
        }
        this.data.pop()
        this.length--
    }
}

const newStack = new Stack() 

newStack.push(10)
newStack.push(5)
newStack.push(3)
newStack.pop()
newStack.pop()
console.log(newStack.peek())

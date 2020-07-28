// 10 -> 5 -> 16

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    printList() {
        const arr = [];
        let currNode = this.head
        while(currNode !== null) {
            arr.push(currNode.value)
            currNode = currNode.next
        }
        return arr
    }

    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        if (index >= this.length) {
            return this.append(value)
        }
        if (index == 0) {
            this.prepend(value)
            return newNode
        } else {
            let count = 1
            let prevNode = this.head
            let currNode = this.head.next
            while(count !== index) {
                prevNode = currNode
                currNode = currNode.next
                count++
            }
            newNode.next = currNode
            prevNode.next = newNode
            this.length++
            return newNode
        }    
    }

    remove(index) {
        if(index >= this.length) {
            index = this.length - 1
        } 
        let curr = this.head
        let prev = null
        let count = 0
        if (index === 0) {
            this.head = curr.next
            this.length--
            return;
        }
        while(curr != null && count != index) {
            prev = curr
            curr = curr.next
            count++
        }
            prev.next = curr.next
            this.length--
    }
}

const newLinkedList = new LinkedList(10)
newLinkedList.append(5)
newLinkedList.append(16)
newLinkedList.prepend(1)
newLinkedList.insert(25, 93)
newLinkedList.remove(2)
console.log(newLinkedList.printList())

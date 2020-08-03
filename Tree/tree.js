class Node {
    constructor(data) {
        this.left = null
        this.right = null
        this.data = data
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(data) {
        if (!this.root) {
            this.root = new Node(data)
            return this
        }
        let curr = this.root
        let prev = null
        while (curr) {
            prev = curr
            //go to the left
            if (data < curr.data) {
                curr = curr.left
            } 
            //go to the right
            else {
                curr = curr.right
            }
        } 
        if (data < prev.data) {
            prev.left = new Node(data)
        }
        else {
            prev.right = new Node(data)
        }
        return this
    }

    search(data) {
        let curr = this.root
        while (curr) {
            if (data == curr.data) {
                return curr
            }
            //go to the left
            if (data < curr.data) {
                curr = curr.left 
            } 
            //go to the right
            else {
                curr = curr.right
            }
        }
        return null
    }
}

const BST = new Tree

console.log(BST)
BST.insert(9)
BST.insert(4)
BST.insert(6)
BST.insert(20)
BST.insert(170)
BST.insert(15)
BST.insert(1)
console.log(BST)
console.log(BST.search(20))
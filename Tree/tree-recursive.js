class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(value) {
        this.root = this.insertWorker(this.root, value)
    }

    insertWorker(curr, data) {
        if (!curr) {return new Node(data)}
        if (data < curr.data) {curr.left = this.insertWorker(curr.left, data)}
        if (data > curr.data) {curr.right = this.insertWorker(curr.right, data)}
        return curr
    }

    search(value) {
        
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
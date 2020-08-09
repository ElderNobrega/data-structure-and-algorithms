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
        return this.searchHelper(this.root, value)
    }
    searchHelper(curr, data) {
        if (!curr) {return false}
        if (data < curr.data) {return this.searchHelper(curr.left, data)}
        else if (data > curr.data) {return this.searchHelper(curr.right, data)}
        return curr.data
    }

    remove(data) {
        this.root = this.removeHelper(this.root, data)
    }

    removeHelper(curr, data) {
        if (!curr) {
            return curr
        }
        if (data < curr.data) {
            curr.left = this.removeHelper(curr.left, data)
        }
        if (data > curr.data) {
            curr.right = this.removeHelper(curr.right, data)
        }
        if (data == curr.data) {
            if (curr.left == null) {return curr.right}
            if (curr.right == null) {return curr.left}

            let next = curr.right
            while (next.left) {
                next = next.left
            }
            curr.data = next.data
            curr.right = this.removeHelper(curr.right, next.data)
        }
        return curr
    }

    BFSRecursive() {
        let list = []
        this.BFSRecursiveHelper([this.root], list)
        return list
    } 

    BFSRecursiveHelper(queue, list) {
        if (!queue.length) {
            return list
        }
        let currNode = queue.shift()
        list.push(currNode.data)
        if (currNode.left) {queue.push(currNode.left)}
        if (currNode.right)  {queue.push(currNode.right)}
        this.BFSRecursiveHelper(queue, list)
        return list
    }
}

const BST = new Tree

BST.insert(9)
BST.insert(4)
BST.insert(6)
BST.insert(20)
BST.insert(170)
BST.insert(15)
BST.insert(1)
console.log(BST.BFSRecursive())
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

    BFS() {
        let currNode = this.root
        let list = [] // a list that will be the answer. Insert the values in the order of BFS
        let queue = [] // A queue to keep track of the lavel we are at so we can access the children
        queue.push(currNode) //add current node to the queue
        console.log(currNode.data)   
        
        while (queue.length > 0) {       
            currNode = queue.shift() //take the first item from the queue
            list.push(currNode.data) // add current node value to the list
            if (currNode.left != null) {queue.push(currNode.left)} //if there is a left or right node to add to the queue
            if (currNode.right != null) {queue.push(currNode.right)}
        }
        return list
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

    DFSInOrder() {
        return this.DFSInOrderHelper(this.root, [])
    }

    DFSInOrderHelper(root, list) {
        if (!root) {return}
        this.DFSInOrderHelper(root.left, list)
        list.push(root.data)
        this.DFSInOrderHelper(root.right, list)
        return list
    }

    DFSPreOrder() {
        return this.DFSPreOrderHelper(this.root, [])
    }

    DFSPreOrderHelper(root, list) {
        if (!root) {return}
        list.push(root.data)
        this.DFSPreOrderHelper(root.left, list)
        this.DFSPreOrderHelper(root.right, list)
        return list
    }

    DFSPostOrder() {
        return this.DFSPostOrderHelper(this.root, [])
    }

    DFSPostOrderHelper(root, list) {
        if (!root) {return}
        this.DFSPostOrderHelper(root.left, list)
        this.DFSPostOrderHelper(root.right, list)
        list.push(root.data)
        return list
    }
}

const BST = new Tree

//console.log(BST)
BST.insert(9)
BST.insert(4)
BST.insert(6)
BST.insert(20)
BST.insert(170)
BST.insert(15)
BST.insert(1)
//BST.remove(4)
console.log(BST.DFSInOrder())
console.log(BST.DFSPreOrder())
console.log(BST.DFSPostOrder())
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
        if (!this.root) {
            return new Node(value)
        }
        let curr = this.root
        
        while (!curr) {
            //go to the left
            if (data < curr.data) {
                curr = curr.left
            } 
            //go to the right
            else {
                curr = curr.right
            }
        } 

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
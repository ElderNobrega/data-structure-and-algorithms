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
            this.root = new Node(value)
        }
        else {
            let curr = this.root
            if (value < curr.data) {
                
            }
        }
    }
}
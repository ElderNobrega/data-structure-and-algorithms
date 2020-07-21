class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    getData(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length ++;
        return this.length;
    }

    pop() {
        delete this.data[this.length - 1]
        this.length--
        return
    }

    delete(index) {
        this.shift(index);
    }

    shift(index) {
        for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length --
    }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('How');
newArray.push('Are');
newArray.push('You');
newArray.pop()
newArray.push('You');
newArray.delete(0)
console.log(newArray);
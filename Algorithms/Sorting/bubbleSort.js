const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    let count = array.length
    while (count >=0) {
        for (let i = 0; i < count; i++) {
            if (array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
            }
        }
        count--
    }
    return array
}

console.log(numbers)
console.log(bubbleSort(numbers))

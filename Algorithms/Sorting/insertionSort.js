const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i +1; j > 0; j--) {
            if (array[j] < array[j-1]) {
                let temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp
            }
        }
    }
    return array
}

console.log(insertionSort(numbers))
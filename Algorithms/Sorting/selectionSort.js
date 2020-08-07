const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let small = array[i]
        let index = 0
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < small) {
                small = array[j]
                index = j
            }
        }
        array[index] = array[i]
        array[i] = small
    }
    return array
}

console.log(selectionSort(numbers))
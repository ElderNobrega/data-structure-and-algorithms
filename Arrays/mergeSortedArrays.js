/* 
Create a function that combines 2 sorted arrays into 1 sorted arrays:
[0, 3, 4, 31], [4, 6, 30]
[0, 3, 4, 4, 6, 30, 31]
 */



 function mergedSortedArrays(arr1, arr2) {
     let length = arr1.length + arr2.length
     let count = 0
     let count2 = 0
     const newArr = []

     if (arr1.length === 0) {return arr2}
     if (arr2.length === 0) {return arr1}

     for (let i = 0; i < length; i++) {
         if(!arr2[count2] || arr1[count] <= arr2[count2]) {
            newArr.push(arr1[count])
            count++
         }
         else {
            newArr.push(arr2[count2])
            count2++
         }    
     }
     return newArr
 }

 console.log(mergedSortedArrays([0, 3, 4, 31], [4, 6, 30]))
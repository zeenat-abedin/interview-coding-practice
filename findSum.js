// Write a function that returns the sum of all elements.

function sumOfElements(arr) {
    return arr.reduce((a,b) => a+b, 0)
}

console.log(sumOfElements([1, 2, 4, 5, 8]))

// another way

function findSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];        
    }
    return sum
}

console.log(findSum([3, 2, 4, 5, 8]))
console.log(findSum([3, 2, 5, 5, 8]))
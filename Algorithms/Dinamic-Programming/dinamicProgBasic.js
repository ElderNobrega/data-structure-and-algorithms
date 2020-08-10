function add80(n) {
    console.log("Long time")
    return n + 80
}

let cache = {} 

function memoizedAdd80(n) {
    if (n in cache) {
        return cache[n]
    } else {
        console.log('Long time')
        cache[n] = n + 80
        return cache[n]
    }
}

console.log("1", memoizedAdd80(5))
console.log("2", memoizedAdd80(5))
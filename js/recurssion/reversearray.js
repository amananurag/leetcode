function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    } else {
        return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, arr.length - 1)));
    }
}

console.log(reverseArray([1,4,2,7,5,2]))
console.log(reverseArray([1,4,2,7,5,2,3]))

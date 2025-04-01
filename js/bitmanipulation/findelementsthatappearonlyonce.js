function findAllUniqueElements(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num); // second time = remove
        } else {
            set.add(num); // first time = add
        }
    }

    return Array.from(set);
}

console.log(findAllUniqueElements([1,2,2,3])); // [1, 3]
console.log(findAllUniqueElements([4,5,4,6,7,5])); // [6, 7]


function findAllUniqueElements2(nums) {
    const freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return Object.keys(freq)
        .filter(key => freq[key] === 1)
        .map(Number); // convert string keys back to numbers
}

console.log(findAllUniqueElements2([1,2,2,3])); // [1, 3]
console.log(findAllUniqueElements2([4,5,4,6,7,5])); // [6, 7]

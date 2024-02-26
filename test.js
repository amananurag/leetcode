function findIndexWithEqualSums(arr) {
    const n = arr.length;

    // Calculate the total sum of the array
    const totalSum = arr.reduce((acc, num) => acc + num, 0);

    let prefixSum = 0;
    let suffixSum = totalSum;

    for (let i = 0; i < n; i++) {
        suffixSum -= arr[i];  // Update the suffix sum as we move to the next element

        if (prefixSum === suffixSum) {
            return i;  // Return the index if prefix sum equals suffix sum
        }

        prefixSum += arr[i];  // Update the prefix sum for the next iteration
    }

    return -1;  // If no such index is found
}
console.log(findIndexWithEqualSums([1, 7, 3, 6, 5, 6]))//3
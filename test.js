function findDuplicate(nums) {
    // Get the length of the array and subtract 1 to get the value of 'n'
    const n = nums.length - 1;
    
    // Initialize a variable to store the XOR result
    let result = 0;

    // XOR all the elements in the array 'nums'
    for (const num of nums) {
        result ^= num;
        console.log(result)
    }
  
    // XOR all the numbers from 1 to 'n'
    for (let i = 1; i <= n; i++) {
        result ^= i;
    }

    // The final value of 'result' will be the duplicate number
    return result;
}

// Example usage:
const nums1 = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums1)); // Output: 2



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // Step 1: XOR all the numbers
    let xorResult = 0;
    for (const num of nums) {
        xorResult ^= num;
    }

    // Step 2: Find a set bit (rightmost set bit)
    const diff = xorResult & (-xorResult);
    console.log(xorResult)
    console.log(diff)
    // Step 3: Divide numbers into two groups and XOR each group
    let num1 = 0, num2 = 0;
    for (const num of nums) {
        if ((num & diff) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
};

console.log(singleNumber([1,2,1,3,2,5]))
console.log(singleNumber([-1,0]))
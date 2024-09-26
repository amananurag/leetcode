/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1); // Start by giving 1 candy to each child

    // First pass: left to right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            // If the current child has a higher rating than the previous one,
            // give them more candies than the previous child.
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Second pass: right to left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            // If the current child has a higher rating than the next one,
            // make sure they have more candies, considering both passes.
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Sum up all the candies to get the total minimum required
    return candies.reduce((total, num) => total + num, 0);
};

console.log(candy([1,0,2]))
console.log(candy([1,2,2]))
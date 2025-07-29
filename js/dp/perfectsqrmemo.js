function numSquares(n) {
    const memo = new Array(n + 1).fill(-1);

    function minSquares(rem) {
        if (rem === 0) return 0;
        if (memo[rem] !== -1) return memo[rem];

        let minCount = Infinity;

        for (let i = 1; i * i <= rem; i++) {
            let square = i * i;
            minCount = Math.min(minCount, 1 + minSquares(rem - square));
        }

        memo[rem] = minCount;
        return minCount;
    }

    return minSquares(n);
}
console.log(numSquares(12)); // 3 (4 + 4 + 4)
console.log(numSquares(13)); // 2 (9 + 4)

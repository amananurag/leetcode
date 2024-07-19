//calculates the number of distinct ways to climb a staircase of n steps, where you can take either 1, 2, or 3 steps at a time

function calculateStairCount(n){
    if(n === 0) return 1;
    if(n === 1) return 1;
    if (n === 2) return 2;

    let dp =[1,1,2];
    for(let i=3;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]+dp[i-3]
    }
    return dp[n]
}

console.log(5)
console.log(7)
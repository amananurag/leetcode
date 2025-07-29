/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const map = new Map();
 
     function bt(amount, start) {
       
         if (amount === 0) return 1;
         if (amount < 0) return 0;
        const key = `${amount} - ${start}`
        
         if (map.has(key)) return map.get(key);
         let totalWays = 0;
 
         for (let i=0;i<coins.length;i++) {
              totalWays += bt(amount - coins[i],i);
            
         }
 
         map.set(key, totalWays);
         return totalWays; 
     }
 
     const result = bt(amount,0);
     return result ;
 };


 console.log(coinChange([1,3,5],12))


 var change = function(amount, coins) {
    const memo = new Map();

    function dp(index, rem) {
        if (rem === 0) return 1;
        if (index === coins.length || rem < 0) return 0;

        const key = `${index}-${rem}`;
        if (memo.has(key)) return memo.get(key);

        // 2 options: pick or not pick
        let pick = dp(index, rem - coins[index]); // stay on same index
        let skip = dp(index + 1, rem); // move to next coin

        memo.set(key, pick + skip);
        return pick + skip;
    }

    return dp(0, amount);
};


console.log(change([1,3,5],12))
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = new Array(amount + 1).fill(-1);
  
      function dp(rem) {
          if (rem === 0) return 0;          // Base case: 0 coins needed
          if (rem < 0) return Infinity;     // Impossible to make negative amount
  
          if (memo[rem] !== -1) return memo[rem];
  
          let minCoins = Infinity;
  
          for (let coin of coins) {
              const res = dp(rem - coin);
              if (res !== Infinity) {
                  minCoins = Math.min(minCoins, 1 + res);
              }
          }
  
          memo[rem] = minCoins;
          return memo[rem];
      }
  
      const result = dp(amount);
      return result === Infinity ? -1 : result;
  };


 console.log(coinChange([1,3,5],12))
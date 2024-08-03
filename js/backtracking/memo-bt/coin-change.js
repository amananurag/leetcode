/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const map = new Map();
 
     function bt(amount) {
         if (map.has(amount)) return map.get(amount);
         if (amount === 0) return 0;
         if (amount < 0) return Infinity;
 
         let min = Infinity;
 
         for (let coin of coins) {
             const res = bt(amount - coin);
             if (res !== Infinity) {
                 min = Math.min(min, res + 1);
             }
         }
 
         map.set(amount, min);
         return min; 
     }
 
     const result = bt(amount);
     return result === Infinity ? -1 : result;
 };


 console.log(coinChange([1,3,5],12))
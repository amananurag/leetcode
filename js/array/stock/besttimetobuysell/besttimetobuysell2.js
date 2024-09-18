var maxProfit = function(prices) {
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // If the price is higher on day i than day (i-1), add the profit
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))

console.log(maxProfit([1,2,3,4,5]))
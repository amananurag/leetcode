/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
       return 1;
   }
   if (n === 1) {
    return x;
}

   if (n < 0) {
       x = 1 / x;
       n = -n;
   }

   if (n % 2 === 0) {
       const halfPow = myPow(x, n / 2);
       return halfPow * halfPow;
   } else {
       const halfPow = myPow(x, (n - 1) / 2);
       return x * halfPow * halfPow;
   }
};

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
//  any number & 1 = give right most bit
//  any number >> 1 = right shift

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flip = 0;
     while (a != 0 || b != 0 || c != 0) {
         if ((c & 1) === 1) {
             if ((a & 1) === 0 && (b & 1) === 0) {
                 flip++;
             }
         } else {
             if ((a & 1) === 1)  flip++;
             if ((b & 1) === 1)  flip++;
             
         }
         a >>= 1;
         b >>= 1;
         c >>= 1;
     }
     return flip;
 };

 console.log(minFlips(2, 6, 5)); // 3
 console.log(minFlips(4, 2, 7)); // 1
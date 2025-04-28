/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const result = [];
   
       for (let row of image) {
           let flippedRow = row.reverse().map(num => num ^ 1);
           result.push(flippedRow);
       }
   
       return result;
   
   }

   console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])) // [[1,0,0],[0,1,0],[0,0,0]]
    console.log(flipAndInvertImage([[1,1,0],[1,0,0],[0,0,0]])) // [[1,1,0],[1,0,0],[0,0,0]]
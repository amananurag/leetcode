var generate = function(numRows) {
    const triangle = [];

  for (let row = 0; row < numRows; row++) {
      const newRow = [];
      
      for (let col = 0; col <= row; col++) {
          // The first and last element of each row is always 1
          if (col === 0 || col === row) {
              newRow.push(1);
          } else {
              // Each triangle element is the sum of the two elements above it
              newRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
          }
      }

      triangle.push(newRow);
  }

  return triangle;
};


//https://leetcode.com/problems/pascals-triangle/

console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)) // [[1]]
console.log(generate(0)) // []
console.log(generate(2)) // [[1],[1,1]]
console.log(generate(3)) // [[1],[1,1],[1,2,1]]


var returnRow = function(numRows) {
    const triangle = [];

  for (let row = 0; row < numRows; row++) {
      const newRow = [];
      
      for (let col = 0; col <= row; col++) {
          // The first and last element of each row is always 1
          if (col === 0 || col === row) {
              newRow.push(1);
          } else {
              // Each triangle element is the sum of the two elements above it
              newRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
          }
      }

      triangle.push(newRow);
  }

  return triangle[numRows-1];
};

console.log(returnRow(1)) // [1]
console.log(returnRow(2)) // [1, 1]
console.log(returnRow(3)) // [1, 2, 1]
console.log(returnRow(5)) // [1, 4, 6, 4, 1]


// If you only need the nth row, you don’t need to build the whole triangle. Use this O(n) space method:
function getNthRow(n) {
    const row = [1];

    for (let k = 1; k <= n; k++) {
        row[k] = row[k - 1] * (n - k + 1) / k;
    }

    return row;
}

console.log(getNthRow(4)); // [1, 4, 6, 4, 1]

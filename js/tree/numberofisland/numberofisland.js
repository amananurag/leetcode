/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;

  const dfs = (i, j) => {
      // Check if out of bounds or water ('0')
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
          return;
      }

      // Mark the current land ('1') as visited by setting it to '0'
      grid[i][j] = '0';

      // Recursively visit all connected land (up, down, left, right)
      dfs(i + 1, j);  // down
      dfs(i - 1, j);  // up
      dfs(i, j + 1);  // right
      dfs(i, j - 1);  // left
  };

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === '1') {  // Found land
              count++;               // New island found
              dfs(i, j);             // Explore the entire island
          }
      }
  }

  return count;
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
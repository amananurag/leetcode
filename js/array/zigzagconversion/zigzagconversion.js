/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = new Array(numRows).fill('');
let increase = true;
let row = 0;
for (let i = 0; i < s.length; i++) {
    result[row] += s.charAt(i);
    console.log(result)
    if (numRows === 1) continue;
    if (row == numRows - 1) increase = false;
    if (row == 0) increase = true;
    row += increase ? 1 : -1;
}
return result.join('');
};

//console.log(convert("PAYPALISHIRING", 3))//"PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4))//"PINALSIGYAHRPI"
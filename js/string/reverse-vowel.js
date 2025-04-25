/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels1 = function(s) {
    const vow = s.match(/[aeiou]/gi);
   return s.replace(/[aeiou]/ig, el=> vow.pop());
};


console.log(reverseVowels1("IceCreAm"))

console.log(reverseVowels1("leetcode"))


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = s.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;

        // Swap vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
};

console.log(reverseVowels("IceCreAm"));   // Output: "AecCrEmI"
console.log(reverseVowels("leetcode"));   // Output: "leotcede"

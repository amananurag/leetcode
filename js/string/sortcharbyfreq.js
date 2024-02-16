//https://leetcode.com/problems/sort-characters-by-frequency/description/?envType=daily-question&envId=2024-02-07

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj ={};
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
            obj[s[i]]++;
        }else{
            obj[s[i]] =1;
        }
    }
// Get an array of keys and values as [key, value] pairs
const keyValueArray = Object.entries(obj);

// Sort the array based on values in descending order
keyValueArray.sort((a, b) => b[1] - a[1]);

// Create an array to store repeated keys
const repeatedKeysArray = [];

// Iterate through the sorted array and duplicate keys based on their frequency
keyValueArray.forEach(([key, value]) => {
  const frequency = value; // Use value as the frequency
  repeatedKeysArray.push(...Array(frequency).fill(key));
});
 return repeatedKeysArray.join('');
};

console.log(frequencySort("tree"))//"eert"
console.log(frequencySort("cccaaa"))//"cccaaa"
console.log(frequencySort("Aabb"))//"bbAa"
console.log(frequencySort("aab"))//"aab"
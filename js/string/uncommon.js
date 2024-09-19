/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
// https://leetcode.com/problems/uncommon-words-from-two-sentences/
var uncommonFromSentences = function(s1, s2) {
    let s1_mapper = {};
    
    let ans = [];
    for( let char of s1.split(' ')){
       s1_mapper[char] = ( s1_mapper[char] || 0) +1; 
    }
    for( let char of s2.split(' ')){
        s1_mapper[char] = ( s1_mapper[char] || 0) +1; 
    }
    for(let key in s1_mapper ){
       if(s1_mapper[key]===1){
           ans.push(key);
       }
    }
    
    return ans;
};

console.log(uncommonFromSentences("this apple is sweet","this apple is sour"))
console.log(uncommonFromSentences("apple apple","banana"))
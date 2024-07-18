/**
 * @param {string} s
 * @return {string}
 */
//https://leetcode.com/problems/sorting-the-sentence/


// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
var sortSentence = function(s) {
    let arr = s.split(' ');
 let response = [];
  let temp =[];
  for(let i=0;i<arr.length;i++){
     
     
 
    temp.push(parseInt(arr[i][arr[i].length-1]))
  
      
  }

  response = arr.map((item,index) => ({'word': item,'order': temp[index] })).sort((a,b)=> a.order - b.order).map((item)=> item.word).map((item)=> item.slice(0,-1))
return response.join(' ');
};
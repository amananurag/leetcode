//https://leetcode.com/problems/number-of-valid-words-in-a-sentence/description/

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    return  sentence.split(/\s+/).filter((s) => s.match(/^[a-z]+(-[a-z]+)?[\.!,]?$/) || s.match(/^[\.!,]$/)).length;
 };

 console.log(countValidWords("This is a sentence.")) //4
 console.log(countValidWords("This is a sentence")) //4
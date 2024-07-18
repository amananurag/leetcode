function patternMatcher(word, pattern){
     for(let i=0;i<=word.length-pattern.length;i++){
        let j;
        for( j=0;j<pattern.length;j++){
            if(word[i+j]!== pattern[j]){
                break;
            }
        }
        if(j === pattern.length){
            return i;
        }
     }
     return -1;
}

console.log(patternMatcher("hello", "ll")); // Expected output: 2
console.log(patternMatcher("aaaaa", "bba")); // Expected output: -1
console.log(patternMatcher("abcdef", "def")); // Expected output: 3
console.log(patternMatcher("abcdef", "abc")); // Expected output: 0
console.log(patternMatcher("abcdef", "ghi")); // Expected output: -1
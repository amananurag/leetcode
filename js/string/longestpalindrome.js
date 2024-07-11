function longestPalindrom(s){
    let freqMap ={};
    let oddFreqCount = 0;
    for(let char of s){
        freqMap[char] = ( freqMap[char] || 0) +1;
        if(freqMap[char]% 2!== 0){
            oddFreqCount++;
        }else{
            oddFreqCount--;
        }
    }
    if(oddFreqCount > 1){
        return s.length-oddFreqCount+1;
    }else{
        return s.length;
    }

}

console.log(longestPalindrom('zaabbccccbbaaz'))
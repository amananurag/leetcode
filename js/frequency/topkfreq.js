function topkfreq(word,k){
    let obj ={}
    for(let char of word){
        if(obj[char]){
            obj[char]++
        }else{
            obj[char] = 1;
        }
    }
    console.log(JSON.stringify(obj))
    return Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .slice(-k)
    .map((item) => item[0]);
}

console.log(topkfreq('aabbcd',2))
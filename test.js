var wordPattern = function(pattern, s) {
    let patternArray = pattern.split('');
    let sArray = s.split(' ');
    if(patternArray.length !== sArray.length) return false;
    let result = [];
    for(let i=0;i<patternArray.length;i++){
        result.push([patternArray[i],sArray[i]]);
    }
    let map = new Map();
    for(let i=0;i<result.length;i++){

       if(map.has(result[i][0])){
              if(map.get(result[i][0]) !== result[i][1]){
                return false;
              }else{
                 // Check if the same word is mapped to different patterns
                if([...map.values()].includes(sArray[i])) {
                return false;
            }
              
              }
        }



        map.set(result[i][0],result[i][1]);
    }
    return true;
};

console.log(wordPattern("abba","dog cat cat dog")); //true
console.log(wordPattern("abba","dog cat cat fish")); //false

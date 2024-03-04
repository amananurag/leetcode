function analgram(word1, word2){
    if(word1.length != word2.length){
        return false;
    }
    lowerWord1 = word1.toLowerCase();
    lowerWord2 = word2.toLowerCase();
    const obj1= {};
    const obj2= {};
    for(let char of lowerWord1){

        if(obj1[char]){
            obj1[char]++;
        }else{
            obj1[char]=1;
        }
    }
    for(let char of lowerWord2){
        if(obj2[char]){
            obj2[char]++;
        }else{
            obj2[char]=1;
        }
    }
    for(let key in obj1){
        if(!obj2[key] || obj1[key] !== obj2[key]){
            return false;
        }
       
    }
    return true;
}

console.log(analgram('The Morse Code','Here Come Dots'))


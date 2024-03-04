/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let obj1 = {};
    let obj2 ={};
    for(let char of s){
        if(obj1[char]){
            obj1[char]++;
        }else{
            obj1[char]=1;

        }
    }
     for(let char of t){
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
   
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
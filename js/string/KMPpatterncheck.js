function Pattern(s, t){
    if (s.length < t.length) return false;
    
    let found = false;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                found = true;
                if (j === t.length - 1) {
                    return found;
                }
                i++;
                continue;
           
            } else {
                found = false;
                break;
            }
        }
        
    }

    return found;
}
  

console.log(Pattern("hellohihello","hi")); //true
console.log(Pattern("hellohihello","hello")); //true
console.log(Pattern("hellohihello","hellohi")); //true
console.log(Pattern("hellohihello","hellohihello")); //true
console.log(Pattern("hellohihello","hellohihellohi")); //false
console.log(Pattern("hellohihello","hellohihellohihello")); //false
console.log(Pattern("abcdefg","xz")); //false
console.log(Pattern("abcdefg","fg")); //true
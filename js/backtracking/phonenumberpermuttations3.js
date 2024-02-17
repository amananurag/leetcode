//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

function permutate(str){
    let result =[];
    if(!str.length) return []
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
      };
      function backtrack(start, combinations){
        if(start ===str.length){
            result.push(combinations.join(''));
            return 
        }
        const letters = map[str[start]];
        for(let i=0;i<letters.length;i++){
            combinations.push(letters[i]);
            backtrack(start + 1, combinations);
            combinations.pop(); // backtrack
        }
      }

      backtrack(0,[])
      return result;
}

console.log(permutate('23'))
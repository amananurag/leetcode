/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    const sTot = new Map();
    const tToS = new Map();
    for(let i=0;i<s.length;i++){
       const sletter = s[i];
        const tletter = t[i];
        if(!sTot.has(sletter)){
            sTot.set(sletter,tletter);
        }else if(sTot.get(sletter)!==tletter){
            return false;
        }
         if(!tToS.has(tletter)){
            tToS.set(tletter,sletter);
        }else if(tToS.get(tletter)!==sletter){
            return false;
        }
    }
    return true;
};

// https://leetcode.com/problems/isomorphic-strings/submissions/1294613640/
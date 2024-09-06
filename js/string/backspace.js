/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return bs(s) === bs(t);
};
const bs =(str) => {
     let res = [];
     for(let char of str){
        if(char === '#'){
            res.pop();
        }else{
            res.push(char);
        }
     }
     return res.join('')
}

console.log(backspaceCompare("ab#c","ad#c"))
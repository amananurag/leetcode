//https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/


var hasGroupsSizeX = function(deck) {
    const map = {};
for(let i=0;i<deck.length;i++){
    if(map[deck[i]]){
        map[deck[i]]++
    }else{
        map[deck[i]]=1;
    }
}
const groups = Object.values(map);
let g = groups[0];
for (let i = 1; i < groups.length; i++) {
  g = gcd(g, groups[i]);

}
return g >= 2;
};

const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x));

console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])) //true
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])) //false
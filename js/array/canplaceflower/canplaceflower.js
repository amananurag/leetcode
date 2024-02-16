//https://leetcode.com/problems/can-place-flowers/description/


function canPlaceFlowers(flowerbed, n) {
   for(let i=0;i<flowerbed.length && n!=0;i++){
      if(flowerbed[i]==0 && flowerbed[i-1]!=1 && flowerbed[i+1]!=1){
         n--;
         i++;
      }
   }
}

console.log(canPlaceFlowers([1,0,0,0,1], 1)) //true
console.log(canPlaceFlowers([1,0,0,0,1], 2)) //false

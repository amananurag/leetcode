function rotateInt(testData){
    let testDataString = testData.toString();
    let reverseTestDataString = testDataString.split('').reverse().join('') ;
    let parsedRotatedInt = parseInt(reverseTestDataString);
    let range = Math.pow(2,31) - 1;
    if(parsedRotatedInt > range || parsedRotatedInt < - (range)){
        return 0
    }
    if(parsedRotatedInt > 0){
        return parsedRotatedInt;
    }else{
        return -parsedRotatedInt;
    }
}

const result = rotateInt(-123);
console.log(result);
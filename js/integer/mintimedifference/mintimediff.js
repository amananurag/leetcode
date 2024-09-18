

var findMinDifference = function(timePoints) {
    if ([new Set(timePoints).size] != timePoints.length) {
        return 0
    }

    // if (timePoints.indexOf(timePoints[0]) != timePoints.lastIndexOf(timePoints[0])) {
    //     return 0
    // }

  timePoints.sort();
  timePoints = timePoints.map(el => {
    let [hours, minutes] = el.split(':');
    return Number(hours) * 60 + Number(minutes);
  })
  
  timePoints.push(timePoints[0] + 1440);
  let minDiff = Infinity;
  for (let i = 1; i < timePoints.length; i ++) {
    minDiff = Math.min(minDiff, timePoints[i] - timePoints[i - 1]);
  }
  
  return minDiff;
};

console.log(findMinDifference(["23:59","00:00"]))
console.log(findMinDifference(["00:00","23:59","00:00"]))
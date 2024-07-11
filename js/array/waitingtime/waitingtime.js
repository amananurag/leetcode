/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let currTime = 0;
    let totalWaitingTime = 0;
    
    for(let i = 0; i < customers.length; i++) {
        let arrivalTime = customers[i][0];
        let cookingTime = customers[i][1];
        
        // Update current time to the maximum of current time or the customer's arrival time
        currTime = Math.max(currTime, arrivalTime);
        
        // Calculate the time when this customer's order is finished
        let finishTime = currTime + cookingTime;
        
        // Calculate the waiting time for this customer
        let waitingTime = finishTime - arrivalTime;
        
        // Add the waiting time to the total waiting time
        totalWaitingTime += waitingTime;
        
        // Update the current time to the finish time
        currTime = finishTime;
    }
    
    // Calculate and return the average waiting time
    return totalWaitingTime / customers.length;
};
console.log(averageWaitingTime([[1,2],[2,5],[4,3]]))
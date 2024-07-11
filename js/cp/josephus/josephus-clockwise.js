function circularWinner(n,k){
    function josephus(n,k){
        if(n === 1) return 1;
        return (josephus(n-1,k)+k-1)%n+1;
    }



    return josephus(n,k);
}

console.log(circularWinner(10,2))
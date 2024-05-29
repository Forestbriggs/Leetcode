const maximumWealth = (accounts) => {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let tempSum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            tempSum += accounts[i][j];
        }
        if (tempSum > maxWealth)
            maxWealth = tempSum;
    }
    return maxWealth;
};
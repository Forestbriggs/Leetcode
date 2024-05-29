const finalValueAfterOperations = (operations) => {
    let ans = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "++X" || operations[i] == "X++") {
            ans++;
        } else {
            ans--;
        }
    }
    return ans;
};

const finalValueAfterOperations2 = (operations) => {
    let ans = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].contains('++')) {
            ans++;
        } else {
            ans--;
        }
    }
    return ans;
}
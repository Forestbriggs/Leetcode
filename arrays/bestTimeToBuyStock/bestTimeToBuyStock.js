var maxProfit = function (prices) {
    let maxP = 0;
    let buy = 0;
    let sell = 1;

    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            let profit = prices[sell] - prices[buy];

            if (profit > maxP) maxP = profit;
        } else {
            buy = sell;
        }

        sell++;
    }

    return maxP;
};
const majorityElement = (nums) => {
    let numCount = {};
    let n = nums.length;
    let targ = Math.floor(n / 2);

    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];

        if (numCount[el] === undefined) {
            numCount[el] = 1;
        } else numCount[el]++;
    }

    for (let key in numCount) {
        if (numCount[key] > targ) return key
    }
};
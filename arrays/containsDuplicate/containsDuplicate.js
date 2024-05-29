var containsDuplicate = function (nums) {
    let mp = new Map;

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        if (mp.get(curr) !== undefined) {
            return true;
        } else {
            mp.set(curr, curr);
        }
    }

    return false;
};

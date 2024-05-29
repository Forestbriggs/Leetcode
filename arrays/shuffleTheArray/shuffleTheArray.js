const shuffle = (nums, n) => {
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(nums[i]);
        ans.push(nums[n + i])
    }
    return ans;
}
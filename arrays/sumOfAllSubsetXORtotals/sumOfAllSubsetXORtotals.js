var subsetXORSum = function (nums) {
    let ans = 0;
    let subsets = [[]];
    for (const el of nums) {
        const last = subsets.length - 1;

        for (let i = 0; i <= last; i++) {
            subsets.push([...subsets[i], el])
        }
    }

    const len = subsets.length
    for (let i = 0; i < len; i++) {
        const curr = subsets[i];
        if (curr.length === 0) continue;

        if (curr.length === 1) ans += curr[0];

        if (curr.length === 2) ans += curr[0] ^ curr[1];

        if (curr.length > 2) {
            ans += curr.reduce((acc, val) => acc ^ val, 0)
        }
    }

    return ans;
}
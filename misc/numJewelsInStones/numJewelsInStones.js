const numJewelsInStones = (jewels, stones) => {
    let output = 0;
    map = new Set();
    for (let i = 0; i < jewels.length; i++) {
        map.add(jewels[i]);
    }

    for (let i = 0; i <= stones.length; i++) {
        if (map.has(stones[i]))
            output++;
    }
    return output
};
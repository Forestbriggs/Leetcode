def numJewelsInStones(jewels, stones):
        ans = 0

        for stone in stones:
            if stone in jewels:
                ans += 1
        
        return ans
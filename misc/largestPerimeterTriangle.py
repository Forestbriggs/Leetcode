def largestPerimeter(nums):
    nums = sorted(nums, reverse=True)
    for i in range(len(nums) - 2):
        a = nums[i]
        b= nums[i + 1]
        c = nums[i + 2]
        if a + b > c and a + c > b and b + c > a:
            return sum([a, b, c])
    
    return 0

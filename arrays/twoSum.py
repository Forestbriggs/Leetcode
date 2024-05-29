def twoSum(nums, target):
    numMap = {}
    n = len(nums)

    for i in range(n):
        diff = target - nums[i]
        if diff in numMap:
            return [numMap[diff], i]
        numMap[nums[i]] = i
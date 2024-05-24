def maxArea(height):
    left = 0
    right = len(height) - 1
    max = 0

    while left < right:
        minVal = min(height[left], height[right])
        area = minVal * (right - left)
        if area > max:
            max = area
        
        if minVal == height[left]:
            left += 1
        else:
            right -= 1
    
    return max
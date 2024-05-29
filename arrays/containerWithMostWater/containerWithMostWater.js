const maxArea = (height) => {
    let highArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let rightVal = height[right];
        let leftVal = height[left];
        let indDif = right - left;
        let area = Math.min(rightVal, leftVal) * indDif;
        if (area > highArea) highArea = area;

        if (leftVal < rightVal) left++;
        else right--;
    }

    return highArea
};
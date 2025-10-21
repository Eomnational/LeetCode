/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0,right=height.length-1;
    let area=0;
    while(left<right){
        let h=Math.min(height[left],height[right]);
        area=Math.max(area,h*Math.abs(right-left));

        height[left]<height[right]?left++:right--;
    }

    return area;
};
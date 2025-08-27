/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0,r=height.length-1;
    let max=0;
    while(l<r){
        let h=Math.min(height[l],height[r]);
        let area=Math.abs(l-r)*h;
        max=Math.max(max,area);
        height[l]<height[r] ? l++:r--;
    }
    return max;
};
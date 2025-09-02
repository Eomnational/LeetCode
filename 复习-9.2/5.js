/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0,j=height.length-1;
    let max=0;
    while(i<j){
        let h=Math.min(height[i],height[j]);
        let area=Math.abs(i-j)*h;
        max=Math.max(max,area);
        height[i]<height[j] ? i++:j--;
    }
    return max;
};
var maxArea = function(height) {
    let max=0;
    for(let i=0,j=height.length-1;i<height.length&&j>=0;){
        let h;
        h=Math.min(height[i],height[j]);
        max=Math.max(h*Math.abs(i-j),max);
        height[i]<height[j]? i++:j--;
    }
    return max;


}


// 示例 1：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：

// 输入：height = [1,1]
// 输出：1

const height=[1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   if(intervals.length<2){
    return intervals;
   }
   intervals.sort((a,b)=>a[0]-b[0]);
   let res=[],left=intervals[0][0],right=intervals[0][1];
   for(let i=1;i<intervals.length;i++){
    if(intervals[i][0]>right){
        res.push([left,right]);
        left=intervals[i][0];
        right=intervals[i][1];
    }else{
        right=Math.max(intervals[i][1],right);
    }
   }
   res.push([left,right]);
   return res;
};


// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。


const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals))
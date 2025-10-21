/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let left=intervals[0][0],right=intervals[0][1];
    let res=[];

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
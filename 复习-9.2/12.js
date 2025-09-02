/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let l=intervals[0][0],r=intervals[0][1],res=[];
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>r){
            res.push([l,r]);
            l=intervals[i][0];
            r=intervals[i][1];
        }else{
            r=Math.max(intervals[i][1],r);
        }

    }
    res.push([l,r]);
    return res;
};
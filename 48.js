/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res=[],path=[];
    candidates.sort((a,b)=>a-b);
    function dfs(j,sum){
        if(sum==target){
            res.push(Array.from(path));
            return;
        }

        for(let i=j;i<candidates.length;i++){
            const n=candidates[i];
            if(sum+n>target)break;
            path.push(n);
            sum=sum+n;
            dfs(i,sum);
            path.pop();
             sum=sum-n;
        }
    }
    dfs(0,0);
    return res;
};
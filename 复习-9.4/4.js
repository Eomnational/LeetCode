/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let path=[],res=[];
    candidates.sort((a,b)=>a-b);

    const dfs=(j,sum)=>{
        if(sum==target){
            res.push([...path]);
            return;
        }

        for(let i=j;i<candidates.length;i++){
            const n=candidates[i];
            if(sum+candidates[i]>target){
            break;
            }
            sum=sum+n;
            path.push(n);
            dfs(i,sum);
            path.pop();
            sum=sum-n;
        }
    }


    dfs(0,0);
    return res;
};
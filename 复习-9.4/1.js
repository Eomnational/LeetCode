/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[],path=[],used=new Array(nums.length).fill(false);
    const dfs=(n,k,used)=>{
        if(path.length===k){
            res.push([...path]);
            return;
        }

        for(let i=0;i<n.length;i++){
            if(used[i]===true){
                continue;
            }
            used[i]=true;
            path.push(n[i]);
            dfs(n,k,used);
            used[i]=false;
            path.pop();
        }
    }
    dfs(nums,nums.length,used);
    return res;
};
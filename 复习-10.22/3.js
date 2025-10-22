/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let path=[],used=new Array(nums.length).fill(false);
    let res=[];
    const dfs=(n,k,used)=>{
        if(path.length==k){
            res.push([...path]);
            return;
        }

        for(let i=0;i<n.length;i++){

            if(used[i]==true){
                continue;
            }

            path.push(n[i]);
            used[i]=true;
            dfs(n,k,used);
            used[i]=false;
            path.pop();
        }
    }


    dfs(nums,nums.length,used);
    return res;
};
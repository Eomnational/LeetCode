/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
   let res=[],path=[],used=new Array(nums.length).fill(false);
   
   function dfs(n,k,used){

    if(path.length===k){
        res.push(Array.from(path));
        return;
    }

    for(let i=0;i<n.length;i++){
        if(used[i]){
            continue;
        }
        path.push(n[i]);
        used[i]=true;
        dfs(n,k,used);
        path.pop();
        used[i]=false;
    }

   }
   dfs(nums,nums.length,used);
   return res;
};
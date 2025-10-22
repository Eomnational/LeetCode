/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[],path=[];

    const dfs=(start)=>{
        res.push([...path]);

        if(start>=nums.length){
            return;
        }

        for(let i=start;i<nums.length;i++){
            path.push(nums[i]);
            dfs(i+1);
            path.pop();
        }
    }

    dfs(0);

    return res;
};
function canPartition(nums) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
    if(sum%2!==0){
        return false;
    }
    let target=sum/2;
    let dp=new Array(target+1).fill(false);
    dp[0]=true;
    for(const num of nums){
        for(let j=target;j>=num;j--){
            dp[j]=dp[j]||dp[j-num];
        }
    }
    return dp[target];
}
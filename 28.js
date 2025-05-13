/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i<=amount;i++){

        for(let j=0;j<coins.length;j++){
            if(i-coins[j]>=0){
                dp[i]=Math.min(dp[i],dp[i-coins[j]]+1);
            }
        }
    }
    if(dp[amount]!=Infinity){
        return dp[amount];
    }else{
        return -1;
    }
};


// 示例 1：

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
// 示例 2：

// 输入：coins = [2], amount = 3
// 输出：-1
// 示例 3：

// 输入：coins = [1], amount = 0
// 输出：0

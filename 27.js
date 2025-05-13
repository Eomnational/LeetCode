/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp=new Array(n+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i<=n;i++){

        for(let j=1;j*j<=i;j++){
            dp[i]=Math.min(dp[i],dp[i-j*j]+1);

        }
    }
    return dp[n];
};

// 示例 1：

// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4
// 示例 2：

// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
